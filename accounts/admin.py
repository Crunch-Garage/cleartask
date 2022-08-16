from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

class UserProfileInline(admin.StackedInline):
 model = models.UserProfile
 max_num = 1
 can_delete = False

class CustomUserAdmin(UserAdmin):
    inlines=[UserProfileInline]
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