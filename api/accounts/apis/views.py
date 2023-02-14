from . import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import (
                    ListAPIView,
                    CreateAPIView,
                    RetrieveAPIView,
                    RetrieveUpdateAPIView,
                    DestroyAPIView
                    )
from rest_framework.permissions import  (
                    AllowAny,
                    IsAuthenticated,
                    IsAdminUser,
                    IsAuthenticatedOrReadOnly
                    )
from django.contrib.auth import get_user_model
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from .. import utility
from .. import tokens

User = get_user_model()

class UserListApiView(ListAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

def create_user_no_password(email):
    # We create a user without any password to reserve the email.
    # When the user clicks th email verification link they will
    # we will redirect them to a page where they can set a password.

    # TO DO: set initial username to a more unique identifier to
    # prevent any possibility of a conflict with existing user accounts
    username = email.split('@')[0]
    try:
        user = User.objects.filter(email=email)
        if not user.exists():
            # We create a user with the email that will receive the verification link
            # We also mark the user inactive to prevent login until email is confirmed
            user = User.objects.create(username=username, email=email, is_active=False)
            return user
        else:
            # Just send a new verification link 
            return user
    except Exception as e:
        # If we encounter an error stop the verification process
        return False

# Send email with verification link
@api_view(['POST'])         
def get_started_with_email(request):
    email= request.POST.get("email", '')
    if email:
        email_is_valid = utility.email_is_valid(email)
        if email_is_valid:
            # get the user
            user = create_user_no_password(email)
            user = User.objects.get(pk=user.first().pk)
            # generate a uid and token
            uid=''
            token=''
            try:
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                token = tokens.account_activation_token.make_token(user)
            except Exception as e:
                print(e)

            if user and uid and token:
                # Send verification email
                send_verification_email = utility.send_email(email, uid, token)
                if send_verification_email:
                    content = {
                        "details": f"Request successful! Check you email - {email}, for instructions to verify your email."
                    }
                    return Response(content)
                else:
                    content = {
                        "details": "Something went wrong try again later!"
                    }
                    return Response(content, status=status.HTTP_400_BAD_REQUEST)
            else:
                # Something in our code has failed, generate a server error
                content = {
                    "details": "Something went wrong try again later!"
                }
                return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            content = {
            "email": f"Your email - {email}, is invalid. Check for typos and try again."
            }
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:
        content = {
            "email": "This field is required"
        }
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

# activate account and mark email as verified
@api_view(['GET'])
def activate_account(request, uuid, token):
    pass
