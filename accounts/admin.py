from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

class CustomUserAdmin(UserAdmin):
    fieldsets = (
        *UserAdmin.fieldsets,  # original form fieldsets, expanded
        (                      # new fieldset added on to the bottom
            'Other Details',  # group heading of choice; set to None for a blank space instead of a header
            {
                'fields': (
                    'phone_number',
                ),
            },
        ),
    )

admin.site.register(models.User, CustomUserAdmin)