from django.db import models
from django.conf import settings

# Abstract model for common fields in subsequent classes
class CommonFields(models.Model):
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    class Meta:
        abstract = True

# Model class for task to be managed
class Task(CommonFields):
    TASK_STAGE = (
        ("TO_DO", "To do"),
        ("IN_PROGRESS", "In progress"),
        ("DONE","DONE")
    )
    title = models.CharField(max_length=100, default=None, null=True, blank=False)
    description = models.TextField(null=True, blank=False)
    task_stage = models.CharField(max_length=25,choices=TASK_STAGE, default="TO_DO", blank=False, null=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="task_creator",\
                    on_delete=models.CASCADE,default=None, null=True, blank=False)
    assigned_to = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="task_assignee",\
                    on_delete=models.CASCADE, default=None, null=True, blank=False)
    is_pinned = models.BooleanField(default=False,null=True, blank=False)

    def __str__(self):
        return f"{self.title} - {self.assigned_to}"

    class Meta:
        # Give the task model a proper plural name in admin
        verbose_name_plural = "Tasks"

# Supporting multi image uploads for Tasks
class TaskPhotos(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, blank=True, null=True)
    #TO DO: Replace ImageField with cloudinary Model Field
    photo = models.ImageField(upload_to ='task_photos/% Y/% m/% d/')


