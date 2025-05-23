from django.db import models
from django.contrib.auth.models import User
class Note(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, null = True)
    body = models.TextField()

    def __str__(self):
        return f"{self.user.username} Note"