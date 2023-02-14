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
        content = {
            "details": "Request successful!"
        }
        return Response(content, )
    else:
        content = {
            "email": "This field is required"
        }
        return Response(content, status=status.HTTP_400_BAD_REQUEST)