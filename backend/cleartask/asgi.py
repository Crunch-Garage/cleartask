import os
from .settings import base
from django.core.asgi import get_asgi_application

if base.DEBUG==False:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cleartask.settings.prod')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cleartask.settings.local')

application = get_asgi_application()
