from django.db import models

# Create your models here.
class Usuario(models.Model):

    id_usuario = models.IntegerField();
    usuario    = models.CharField(max_length = 60);
    contraseña = models.CharField(max_length = 60);
    mail       = models.CharField(max_length = 60);
    nombre     = models.CharField(max_length = 60);
    apellido   = models.CharField(max_length = 60);
    celular    = models.CharField(max_length = 60);
