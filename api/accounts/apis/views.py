from . import serializers
from rest_framework.decorators import api_view, permission_classes
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
            return user.pk
        else:
            # Just send a new verification link 
            return user.first().pk
    except Exception as e:
        # If we encounter an error stop the verification process
        return False

# Send email with verification link
@api_view(['POST'])         
def get_started_with_email(request):
    try:
        email= request.data["email"]
    except Exception as e:
        email = ''
    if email:
        email_is_valid = utility.email_is_valid(email)
        if email_is_valid:
            # get the user
            user_pk = create_user_no_password(email)
            user = User.objects.get(pk=user_pk)
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

# Api that allows users to claim their created account.
@api_view(['POST'])
def activate_account(request, uid, token):
    try:
        # Get ui from the api url
        uid = force_text(urlsafe_base64_decode(uid))
        # The retrieve the inactive user
        user = User.objects.get(pk=uid)
    except Exception as e:
        print(e)
        user = None
        
    if user is not None and tokens.account_activation_token.check_token(user, token):
        # Mark user as active so the can be able to login
        user.is_active = True
        user.save()
        token = utility.get_tokens_for_user(user)
        # TO DO: mark email address as verified
        content = {
            "details": "Email verified successfully. You can now login to your account",
            "access":token["access"],
            "refresh":token["refresh"]
        }
        return Response(content)
    else:
        content = {
            "details": "Invalid activation link."
        }
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def finish_registration(request):
    first_name = request.data.get("first_name", None)
    last_name = request.data.get("last_name", None)
    password1 = request.data.get("password1", None)
    password2 = request.data.get("password2", None)
    
    if first_name and last_name and password1 and password2:
        if password1 == password2:
            user = User.objects.get(pk=request.user.pk)
            user.first_name = first_name
            user.last_name = last_name
            user.set_password(password1)
            user.save()

            content = {
                "message": "Details updated successfully"
            }
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
        else:
            content = {
                "password1":"Password does not match",
                "password2":"Password does not match",
                "message": "Password1 and Password2 do not match"
            }
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:
        content = {
            "first_name":"This field is required",
            "last_name": "This field is required",
            "password1": "This field is required",
            "password2": "This field is required",
            "message": "One or all of the above fields are missing"
        }
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
