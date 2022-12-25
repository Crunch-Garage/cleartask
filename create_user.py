# Since render host free tier doesn't allow shell commands we can call
# this script from build.sh the first time we deploy this app
# so it can create a django superuser we can use to login to
# our admin dashboard

# Fixes app registry not loaded yet error
import django
django.setup()
from decouple import config
from django.contrib.auth import get_user_model

User = get_user_model()
User.objects.create_superuser(config('SUPERUSER_NAME', cast=str), '', config('SUPERUSER_PASSWORD', cast=str), is_staff=True)