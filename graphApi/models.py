from django.db import models

class Task(models.Model):
  title = models.CharField(max_length=200)
  completed = models.BooleanField(default=False, blank=True, null=True)
  lastupdate = models.DateTimeField(auto_now=True)
  timestamp = models.DateTimeField(auto_now_add=True)

  class Meta:
    ordering = ('-lastupdate',)

  def __str__(self):
    return self.title

