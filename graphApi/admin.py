from django.contrib import admin
from .models import Task
from django.contrib.admin.options import ModelAdmin

class TaskDisplay(ModelAdmin):
    list_display = ["title"]
    search_fields = ["title"]
    list_filter = ["title"]
admin.site.register(Task, TaskDisplay)
