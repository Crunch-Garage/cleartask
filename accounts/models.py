from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

# extending user model to make it easy later to add custom fields to user table
class User(AbstractUser):
    # Make sure the phone number is in the correct format
    phone_regex = RegexValidator( regex   =r'^\+?1?\d{9,14}$', message ="Phone number must be entered in the format: '+254xxxxxxxxx'. Up to 14 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, unique=True, null=True)

    class Meta:
        verbose_name_plural = "Users"
    
    def __str__(self):
        return f"{self.username} - {self.email}"