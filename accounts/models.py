from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

# extending user model to make it easy later to add custom fields to user table
class User(AbstractUser):
    pass