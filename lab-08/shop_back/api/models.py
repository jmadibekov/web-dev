from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
