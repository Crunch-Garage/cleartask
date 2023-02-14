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
from .. import utility

User = get_user_model()

class UserListApiView(ListAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

# 
@api_view(['POST'])
def get_started_with_email(request):
    email= request.POST.get("email", '')
    if email:
        email_is_valid = utility.email_is_valid(email)
        if email_is_valid:
            send_verification_email = utility.send_email(email)
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
            content = {
            "email": f"Your email - {email}, is invalid. Check for typos and try again."
            }
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:
        content = {
            "email": "This field is required"
        }
        return Response(content, status=status.HTTP_400_BAD_REQUEST)