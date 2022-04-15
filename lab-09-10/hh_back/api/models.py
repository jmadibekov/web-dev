from operator import mod
from statistics import mode
from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    city = models.CharField(max_length=200)
    address = models.TextField()


class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    salary = models.FloatField()

    company = models.ForeignKey(Company, on_delete=models.CASCADE)
