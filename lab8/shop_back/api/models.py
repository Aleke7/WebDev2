import re
from django.db import models
from django.http import JsonResponse

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    description = models.TextField(max_length=300, default="")
    count = models.IntegerField()
    is_active = models.BooleanField()

    def toJSON(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }

class Category(models.Model):
    name = models.CharField(max_length=100)

    def toJSON(self):
        return {
            'id': self.id,
            'name': self.name
        }

