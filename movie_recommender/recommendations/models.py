# recommendations/models.py

from django.db import models

class MovieRecommendation(models.Model):
    title = models.CharField(max_length=255)
    score = models.CharField(max_length=10)
    weekend_gross = models.CharField(max_length=50)
    total_gross = models.CharField(max_length=50)
    weeks_released = models.CharField(max_length=10)
    reasoning = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
