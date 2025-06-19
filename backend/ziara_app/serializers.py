from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class MyTokenSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['rol'] = self.user.perfiles.rol  # <- aquí le agregas el rol a la respuesta
        return data



class RegisterSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required = False ,allow_blank=False )
    last_name = serializers.CharField(required = False ,allow_blank=False )
    rol = serializers.CharField(required=False,allow_blank=False)
    email = serializers.EmailField(
        required=True,
        max_length=100,
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="Este correo ya está registrado."
            )
        ],
        error_messages={
            'required': 'Este campo es obligatorio',
            'blank': 'Este campo no puede estar vacio',
            'invalid': 'Este correo tiene un formato invalido'
        }
    )
    password=serializers.CharField(
        required = True,
        write_only =True, # solo recibe el dato no lo muestra eso es write only 
        min_length = 8,
        max_length = 100,
        error_messages={
            'required': 'Este campo es obligatorio',
            'blank': 'Este campo no puede estar vacio',
            'min_length': 'La contraseña debe tener mínimo 8 caracteres',
            'max_length': 'La contraseña debe tener máximo 100 caracteres'
        }
    )
    class Meta :
        model = User
        fields = ['email','password','first_name','last_name','rol']
    
    def create(self,validate_data):
        email = validate_data['email'] # Dato Obligatorio 
        password = validate_data['password']
        
        first_name = validate_data.get('first_name','')
        last_name = validate_data.get('last_name','')
        rol = validate_data.get('rol','C')
        
        user = User(
            username = email,
            email = email,
            password = password,
            first_name = first_name,
            last_name = last_name,
        )
        perfil = Perfiles(
            usuario = user,
            rol = rol
        )
        user.set_password(password) # encripta clave
        user.save()
        perfil.save()
        return user


# Serializar para mostrar datos de los perfiles que estan enlazados con el usuario
class UserPerfil (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email','first_name','last_name','last_login']

class PerfileSerializer(serializers.ModelSerializer):
    usuario = UserPerfil()
    class Meta :
        model = Perfiles
        fields = ['id','rol','usuario']


class ServiciosSerializer(serializers.ModelSerializer):
    class Meta :
        model = Servicios
        fields = ['id','nombre','precio','descripcion','categoria','duracion']


class ProductosSerializer(serializers.ModelSerializer):
    class Meta :
        model = Productos
        fields = ['id','nombre','precio','descripcion','categoria',]