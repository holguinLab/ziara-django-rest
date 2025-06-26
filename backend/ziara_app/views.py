#region Librerias
""" Importacion de librerias importantes de DRP """
from django.contrib.auth.models import User # importamos el modelo de django User ya que es el modelo que estamos usando para guardar nuestros usuarios
from rest_framework.permissions import IsAuthenticated # importamos  herramienta del framework principal (DRP) que nos permite usar con decorador para saber si hay autenticacion en la peticion al servidor
from rest_framework.decorators import api_view,permission_classes # Decoradores el api_view lo usamos para envolver nuestras vistas con metodos como POST,GET,PUT,PUSH,DELETE , El otro es para usarlo con IsAuthenticated
from rest_framework import status,generics # Importamos Status para generar codigos de respuesta correctos al momento de enviar al fronted o a la respuesta , generics es una herramienta de DRP que nos importa vistas genericas que tienen validaciones , metodos de peticion entre otras.
from rest_framework.response import Response # Importamos Herramienta de DRP para Generar respuestas en las peticiones
from rest_framework.viewsets import ModelViewSet # Importamos Herramienta de DRP para generar vistas y modelos que tienen valdiaciones , metodos entre otras que facilita muchas las cosas 

""" Importacion de librerias importantes de simpleJsonWebToken """
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView


""" Importacion de archivos de la raiz importantes para la logica del negocio """
from .serializers import * # Importamos el archivo serializer para usar en la logica
from .models import * # Importamos el archivo model para usar en la logica
from .serializers import MyTokenSerializer# 


""" Importacion de otras librerias utiles que se usaran en el proyecto  """
from supabase import create_client # Importamos la herramienta de supabase que nos permite conectar nuestra app con el cliente de supabase
from decouple import config # importamos config desde la libreria que nos permite trabajar con variables de entorno (decouple)


#endregion



""" Creacion del cliente para conectar nuestra app con supabase  """
url: str =config("SUPABASE_URL") # url del proyecto en supabse
key: str =config("SUPABASE_KEY") # API Key del proyecto en supabase
supabase = create_client(url, key) # Funcion que crea la conexion con los datos obtenidos (Asi lo explica la documentacion)




"""  """
class MyTokenView(TokenObtainPairView):
    serializer_class = MyTokenSerializer



#region Registro y Autenticacion 

""" Vista para registrar usuarios , como usamos user de django , el atributo username lo remplazamos por el email en el serializer """
#el login se hace con jwt con la vista que trae ese framework directo desde urls.py
@api_view(['POST'])
def register(request):
    serializer =  RegisterSerializer(data = request.data)
    if serializer.is_valid():
        usuario = serializer.save()
        token = RefreshToken.for_user(usuario)
        return Response({'mensaje' : 'Su cuenta se a registrado correctamente','token' : str(token),'access' : str(token.access_token)},status=status.HTTP_201_CREATED)
    return Response(serializer._errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def verificar_rol(request):
    try:
        rol = request.user.perfiles.rol
        return Response({'rol': rol})
    except Exception as e:
        return Response({'error': 'Perfil no encontrado o no tiene rol'}, status=404)
#endregion

#region Personal (Admin)

""" Vista listar solo clientes desde el panel de admin, estamos reutilizando el mismo serailizador de perfiles para usar varios filtros de busqueda (barberos , clientes o admins) """
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_clientes(request):
    if request.user.perfiles.rol != 'A':
        return Response({'error': 'No Autorizado '} ,status=status.HTTP_401_UNAUTHORIZED)
    clientes = Perfiles.objects.filter(rol = 'C')
    serializer = PerfileSerializer(clientes,many=True)
    return Response(serializer.data)

""" Vista listar solo barberos desde el panel de admin , estamos reutilizando el mismo serailizador de perfiles para usar varios filtros de busqueda (barberos , clientes o admins) """
""" @api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_barberos(request):
    if request.user.perfiles.rol != 'A':
        return Response({'error': 'No Autorizado '} ,status=status.HTTP_401_UNAUTHORIZED)
    barberos = Perfiles.objects.filter(rol = 'B')
    serializer = PerfileSerializer(barberos,many=True)
    return Response(serializer.data) """

class AdminBarberosViewSet (ModelViewSet):
    queryset = Perfiles.objects.filter(rol = 'B')
    serializer_class = PerfileSerializer
    permission_classes = [IsAuthenticated]


#endregion 

#region Servicios (Admin)

""" vista Para listar Servicios desde el panel del admin , Reutilizamos un mismo serializador para hacer el mismo crud """
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def servicios(request):
    if request.user.perfiles.rol != 'A':
        return Response({'error': 'No Autorizado '} ,status=status.HTTP_403_FORBIDDEN)
    servicios = Servicios.objects.all()
    serializer = ServiciosSerializer(servicios,many=True)
    return Response(serializer.data)

""" vista Para Crear Servicios desde el panel del admin , Reutilizamos un mismo serializador para hacer el mismo crud """
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def crear_servicio(request):
    serializer = ServiciosSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'mensaje ': 'Servicio Agregado Correctamente'},status=status.HTTP_201_CREATED)
    return Response(serializer._errors,status=status.HTTP_400_BAD_REQUEST)
#endregion 

#region Archivos (Supabase)
""" Vista Para Cargar Archivos desde Supabase (Mantenimiento de Vista ) """
@api_view(['POST'])
def cargar_archivo(request):
    archivo = request.FILES.get('file')
    if not archivo:
        return  Response({'mensaje':'No se cargo ningun archivo'},status=status.HTTP_400_BAD_REQUEST)
    response = (supabase.storage.from_('avatares').upload(f'{archivo.name}', archivo.read(),{'content-type':archivo.content_type}))
    url = supabase.storage.from_('avatares').get_public_url(archivo.name)
    return Response({'mensaje': 'Archivo subido exitosamente', 'url': url}, status=200)
#endregion

#region Productos Admin (Vistas Con Clases & generics views  )
""" Para Crear Logica Basada en Clases se hace de esta manera , es bueno por que asi podemos heredar clases que tiene el framework rest_framework que ya nos traen por defecto vista y validaciones con POST, get , Delete  documentacion oficial del tema https://www.django-rest-framework.org/api-guide/generic-views/#retrieveupdatedestroyapiview """

""" Esto es lo mismo que hacer la vista de Listar Servicios pero con Clases y vistas genericas """
class ListarProductos(generics.ListAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer
    permission_classes = [IsAuthenticated]

""" Esto es lo mismo que hacer la vista de crear Servicios pero con Clases y vistas genericas """
class CrearProducto(generics.CreateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer
    permission_classes = [IsAuthenticated]

""" Esto es lo mismo que hacer la vista de eliminar Servicios pero con Clases y vistas genericas """
class EliminarProducto(generics.DestroyAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer
    permission_classes = [IsAuthenticated]
    """ lookup_field = 'id'  # Opcional, por defecto es 'pk' """

#endregion



class CarritoViewSet(ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = Carrito.objects.all()
    serializer_class = CarritoProductoSerializer
    
    def get (self):
        return Carrito.objects.filter(cliente=self.user.perfiles)
    
    def post (self,serializer):
        return serializer.save(cliente=self.request.user.perfiles)


class ItemCarritoViewSet(ModelViewSet):
    queryset = ItemCarrito.objects.all()
    serializer_class = ItemCarritoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ItemCarrito.objects.filter(carrito__cliente=self.request.user.perfiles.usuario)



