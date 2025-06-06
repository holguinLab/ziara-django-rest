from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Perfiles)
class AdminPerfil(admin.ModelAdmin):
    list_display = ['id','usuario','rol']
    list_editable = ['usuario','rol']