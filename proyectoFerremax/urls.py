from django.urls import path
from django.contrib import admin
from .views import index, catalogo, login, producto, registro

urlpatterns = [
    path('', index, name='index'),
    path('catalogo/', catalogo, name='catalogo'),
    path('login/', login, name='login'),
    path('producto/', producto, name='producto'),
    path('registro/', registro, name='registro'),
    path('admin/', admin.site.urls),
]
