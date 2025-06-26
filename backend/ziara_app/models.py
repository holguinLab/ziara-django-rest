from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from datetime import time


# Create your models here.

class Perfiles(models.Model):
    usuario = models.OneToOneField(User,on_delete=models.CASCADE)
    ROLES = (
        ("A","Administrador"),
        ("B","Barbero"),
        ("C","Cliente"),
    )
    rol = models.CharField(max_length=1,choices=ROLES,default='C')
    horario_trabajo = models.CharField(max_length=100, blank=True, null=True)
    especialidad = models.CharField(max_length=200, blank=True, null=True)
    experiencia = models.IntegerField(blank=True, null=True)
    hora_inicio = models.TimeField(null=True, blank=True)
    hora_final = models.TimeField(null=True, blank=True)

class Servicios(models.Model):
    nombre = models.CharField(max_length=100,null=False,blank=False)
    precio = models.DecimalField(max_digits=12,decimal_places=3,null=False,blank=False)
    duracion = models.CharField(max_length=100,blank=True,null=True ,default='')
    descripcion = models.CharField(max_length=200,blank=True,null=True,default='')
    img_url = models.URLField(blank=True, null=True)  # Guarda la URL completa de la imagen
    CATEGORIAS = (
        ("B","Barba"),
        ("C","Cabello"),
        ("S","Spa"),
    )
    categoria = models.CharField(max_length=1,choices=CATEGORIAS,default='')
    def __str__(self):
        return f' {self.nombre} '

class Citas(models.Model):
    cliente = models.ForeignKey('Perfiles',on_delete=models.CASCADE,related_name="cita_cliente",limit_choices_to={'rol':'C'}) 
    barbero = models.ForeignKey('Perfiles',on_delete=models.SET_NULL,null=True,related_name="cita_barbero",limit_choices_to={'rol':'B'}) 
    fecha = models.DateField(default=now ,null=True,blank=True)
    hora = models.TimeField(default=now)
    ESTADOS =(
        ("PEN","Pendiente"),
        ("PRO","Programada"),
        ("CAN","Cancelada"),
        ("FIN","Finalizada"),
    )
    estado = models.CharField(max_length=3,choices=ESTADOS)
    
    def __str__(self):
        return f' {self.cliente} - {self.barbero} '

class Productos(models.Model):
    nombre = models.CharField(max_length=100,null=False,blank=False)
    precio = models.DecimalField(max_digits=12,decimal_places=3,null=False,blank=False)
    descripcion = models.TextField(blank=True,null=True,default='')
    img_url = models.URLField(blank=True, null=True)  # Guarda la URL completa de la imagen
    CATEGORIAS = (
        ("B","Barba"),
        ("C","Cabello"),
        ("R","Rostro"),
        ("N","Natural"),
        ("P","Cuerpo"),
    )
    categoria = models.CharField(max_length=1,choices=CATEGORIAS,default='')
    def __str__(self):
        return f' {self.nombre} '    

class Inventarios(models.Model):
    producto = models.ForeignKey('Productos',on_delete=models.CASCADE,related_name='inventario_productos')
    stock = models.IntegerField()
    fecha_actualizacion = models.DateTimeField(auto_now=True)    

# Un cliente puede tener muchos servicios
class CitaServicios(models.Model):
    cita = models.ForeignKey('Citas',on_delete=models.CASCADE,related_name="citas")
    servicio = models.ForeignKey('Servicios', on_delete=models.SET_NULL, null=True, blank=True, related_name="cita_servicio")


class Pagos(models.Model):
    cliente = models.ForeignKey('Perfiles', on_delete=models.CASCADE, related_name="pagos",limit_choices_to={'rol':'C'})
    cita = models.ForeignKey('Citas', on_delete=models.SET_NULL, null=True, blank=True, related_name="pagos_cita")
    fecha_pago = models.DateTimeField(default=now)
    monto_total = models.DecimalField(max_digits=12, decimal_places=2)



class ProductosComprados(models.Model):
    pago = models.ForeignKey('Pagos', on_delete=models.CASCADE, related_name='productos_comprados')
    producto = models.ForeignKey('Productos', on_delete=models.CASCADE)
    


class Carrito(models.Model):
    cliente = models.ForeignKey(Perfiles, on_delete=models.CASCADE)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)
    comprado = models.BooleanField(default=False)

class ItemCarrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE, related_name='items')
    producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=1)