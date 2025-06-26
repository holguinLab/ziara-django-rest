from django.urls import path,include
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
#""" path('listar_barberos/',listar_barberos,name='listar_barberos   ') """,


router = DefaultRouter()
router.register(r'barberos',AdminBarberosViewSet) #r'barberos' es el prefijo que aparece en la URL.
router.register(r'carrito',CarritoViewSet)
router.register(r'items',ItemCarritoViewSet)

urlpatterns=[
    path('',include(router.urls)),
    path('register/',register,name='register'),
    path('token/', MyTokenView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('listar_clientes/',listar_clientes,name='listar_clientes'),
    path('verificar_rol/',verificar_rol,name='verificar_rol'),
    path('servicios/',servicios,name='servicios   '),
    path('productos/',ListarProductos.as_view(),name='productos   '),
    path('cargar_archivo/',cargar_archivo,name='cargar_archivo '),
    path('crear_servicio/',crear_servicio,name='crear_servicio'),
    path('crear_producto/',CrearProducto.as_view(),name='crear_producto'),
    path('eliminar_producto/<int:pk>',EliminarProducto.as_view(),name='eliminar_producto')
]