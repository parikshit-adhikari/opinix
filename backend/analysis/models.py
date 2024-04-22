from django.db import models


class MyFile(models.Model):
    file = models.FileField(blank=False, null=False)
    description = models.CharField(null=True,max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'MyFiles'
