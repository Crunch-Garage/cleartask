#!/bin/sh
# scripts to run django with gunicorn

set -e

ls -la /vol/
ls -la /vol/web

whoami

python manage.py migrate
python manage.py collectstatic --noinput
gunicorn homey.wsgi:application --bind 0.0.0.0:9000 --timeout 300  --workers 3 
