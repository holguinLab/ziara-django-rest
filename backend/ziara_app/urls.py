from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns=[
    path('register/',register,name='register'),
    path('token/', MyTokenView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('listar_clientes/',listar_clientes,name='listar_clientes'),
    path('listar_barberos/',listar_barberos,name='listar_barberos   ')
]