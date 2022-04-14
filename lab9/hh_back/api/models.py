from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=300, default='')
    city = models.CharField(max_length=30)
    address = models.TextField(max_length=100)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def toJSON(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    def __str__(self):
        return f'#{self.id}: {self.name} | {self.description} | {self.city} | {self.address}'

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=300, default='')
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True, related_name='companies')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def toJSON(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.toJSON()
        }

    def __str__(self):
        return f'{self.id}: {self.name} | {self.description} | {self.salary}'