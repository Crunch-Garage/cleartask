from django.contrib import admin
from . import models

class TaskPhotosInline(admin.StackedInline):
	model = models.TaskPhotos
	extra = 1

class TaskAdmin(admin.ModelAdmin):
    inlines = [TaskPhotosInline]
    list_display = ("title","created_by","assigned_to")

admin.site.register(models.Task,TaskAdmin)