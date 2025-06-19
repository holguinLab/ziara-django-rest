from django.shortcuts import render
from .serializers import *
from .models import *
from django.contrib.auth.models import User

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,permission_classes
from rest_framework import status,generics
from rest_framework.response import Response

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenSerializer

from supabase import create_client

from decouple import config

url: str =config("SUPABASE_URL")
key: str =config("SUPABASE_KEY")
supabase = create_client(url, key)




# Create your views here.

class MyTokenView(TokenObtainPairView):
    serializer_class = MyTokenSerializer


@api_view(['POST'])
def register(request):
    serializer =  RegisterSerializer(data = request.data)
    if serializer.is_valid():
        usuario = serializer.save()
        token = RefreshToken.for_user(usuario)
        return Response({'mensaje' : 'Su cuenta se a registrado correctamente','token' : str(token),'access' : str(token.access_token),"rol" : usuario.perfiles.rol},status=status.HTTP_201_CREATED)
    return Response(serializer._errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_clientes(request):
    if request.user.perfiles.rol != 'A':
        return Response({'error': 'No Autorizado '} ,status=status.HTTP_403_FORBIDDEN)
    clientes = Perfiles.objects.filter(rol = 'C')
    serializer = PerfileSerializer(clientes,many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_barberos(request):
    if request.user.perfiles.rol != 'A':
        return Response({'error': 'No Autorizado '} ,status=status.HTTP_403_FORBIDDEN)
    barberos = Perfiles.objects.filter(rol = 'B')
    serializer = PerfileSerializer(barberos,many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def servicios(request):
    if request.user.perfiles.rol != 'A':
        return Response({'error': 'No Autorizado '} ,status=status.HTTP_403_FORBIDDEN)
    servicios = Servicios.objects.all()
    serializer = ServiciosSerializer(servicios,many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def crear_servicio(request):
    serializer = ServiciosSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'mensaje ': 'Servicio Agregado Correctamente'},status=status.HTTP_201_CREATED)
    return Response(serializer._errors,status=status.HTTP_400_BAD_REQUEST)


""" Para Crear Logica Basada en Clases se hace de esta manera , es bueno por que asi podemos heredar clases que tiene el framework rest_framework que ya nos traen por defecto vista y validaciones con POST, get , Delete  documentacion oficial del tema https://www.django-rest-framework.org/api-guide/generic-views/#retrieveupdatedestroyapiview """


""" Esto es lo mismo que hacer la vista de Listar Servicios pero con funciones """
class ListarProductos(generics.ListAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer
    permission_classes = [IsAuthenticated]

""" Esto es lo mismo que hacer la vista de crear Servicios pero con funciones """
class CrearProducto(generics.CreateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer
    permission_classes = [IsAuthenticated]

class EliminarProducto(generics.DestroyAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer
    permission_classes = [IsAuthenticated]
    """ lookup_field = 'id'  # Opcional, por defecto es 'pk' """







@api_view(['POST'])
def cargar_archivo(request):
    archivo = request.FILES.get('file')
    if not archivo:
        return  Response({'mensaje':'No se cargo ningun archivo'},status=status.HTTP_400_BAD_REQUEST)
    response = (supabase.storage.from_('avatares').upload(f'{archivo.name}', archivo.read(),{'content-type':archivo.content_type}))
    url = supabase.storage.from_('avatares').get_public_url(archivo.name)
    return Response({'mensaje': 'Archivo subido exitosamente', 'url': url}, status=200)


