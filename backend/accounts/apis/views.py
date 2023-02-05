from . import serializers
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