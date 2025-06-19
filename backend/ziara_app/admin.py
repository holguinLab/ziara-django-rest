from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Perfiles)
class AdminPerfil(admin.ModelAdmin):
    list_display = ['id','usuario','rol']
    list_editable = ['usuario','rol']

@admin.register(Servicios)
class AdminServicios(admin.ModelAdmin):
    list_display = ['id','nombre','precio','descripcion','categoria','duracion']
    list_editable = ['nombre','precio','descripcion','categoria','duracion']

@admin.register(Productos)
class AdminProductos(admin.ModelAdmin):
    list_display = ['id','nombre','precio','descripcion','categoria',]
    list_editable = ['nombre','precio','descripcion','categoria']