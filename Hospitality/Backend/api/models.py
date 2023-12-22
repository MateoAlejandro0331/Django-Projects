from django.db import models

gender_choices = (
    ('M', 'Male'),
    ('F', 'Female')
)

class Hospedador(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    address = models.CharField(max_length=50)
    gender = models.CharField(max_length=1, choices=gender_choices)
    capacity = models.IntegerField(null=True, blank=True, default=0)
    guests = models.IntegerField(null=True, blank=True, default=0)
    created_at = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name


class Huesped(models.Model):
    hospedador = models.ForeignKey(Hospedador, null=True, blank=True, related_name='huespedes', on_delete=models.SET_NULL)
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    gender = models.CharField(max_length=1, choices=gender_choices)
    created_at = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name



