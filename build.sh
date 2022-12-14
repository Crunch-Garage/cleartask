#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements/prod.txt

python manage.py collectstatic --no-input
python manage.py migrate
# # Use only once
# export DJANGO_SETTINGS_MODULE=cleartask.settings.prod
# python create_user.py