from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from drf_writable_nested.serializers import WritableNestedModelSerializer
from django.contrib.auth import get_user_model
from rest_auth.models import TokenModel
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import transaction
from .. import models

User = get_user_model()

# Custom auth token serializer that will allow us to pass custom data after we register a user
class CustomTokenSerializer(serializers.ModelSerializer):
    auth_token = serializers.CharField(source='key')
    access_tokens = serializers.SerializerMethodField()
    user_id = serializers.SerializerMethodField()
    user_name = serializers.SerializerMethodField()

    class Meta:
        model = TokenModel
        fields = ('auth_token','access_tokens','user_id', 'user_name')

    def get_user_id(self, obj):
        return str(obj.user.pk)

    def get_user_name(self, obj):
        return obj.user.username

    def get_access_tokens(self, obj):
        """
         We generate JWT auth tokens which we will use in subsequent API requests.
         This will eliminate the need of firing the token request api to get the auth tokens after sign up.
        """
        refresh = RefreshToken.for_user(obj.user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

class CustomRegisterSerializer(RegisterSerializer):
    email = serializers.EmailField(min_length=None,allow_blank=True, required=False)
    phone_number = serializers.CharField(max_length=30,allow_blank=True,required=False)
    first_name = serializers.CharField(max_length=65,allow_blank=True,required=False)
    last_name = serializers.CharField(max_length=65,allow_blank=True,required=False)

    def validate_phone(self,phone):
        usr = User.objects.filter(phone=phone)
        if usr.exists():
            raise serializers.ValidationError(
                    ("A user is already registered with this phone number."))
        else:
            return phone

    # Define transaction.atomic to rollback the save operation in case of error
    @transaction.atomic
    def save(self, request):
        user = super().save(request)
        """
            Checking if there is data in the fields before trying to save to avoid Integrity errors
            caused by empty fields
        """
        if self.data.get('email'):
            user.email = self.data.get('email')
        if self.data.get('phone_number'):
            user.phone = self.data.get('phone_number')
        if self.data.get('first_name'):
            user.first_name = self.data.get('first_name')
        if self.data.get('last_name'):
            user.last_name = self.data.get('last_name')
        user.save()
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserProfile
        fields = ["id","user","profile_photo", "updated_at"
        ]

class UserSerializer(WritableNestedModelSerializer):
    user_profile = UserProfileSerializer(many=False)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email',
        'user_profile'
        ]