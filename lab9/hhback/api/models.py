from django.db import models
from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=40)
    address = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name
    
class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")
    

    def __str__(self):
        return self.name
    
