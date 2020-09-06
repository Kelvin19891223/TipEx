from django.db import models

class SubscribeModel(models.Model):
    email_id = models.CharField(max_length=255, blank=True)
    regist_date = models.CharField(max_length=255, blank=True)
