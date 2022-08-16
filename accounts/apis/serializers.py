from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from drf_writable_nested.serializers import WritableNestedModelSerializer
from django.contrib.auth import get_user_model
from django.db import transaction
from .. import models

User = get_user_model()

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
