"""web_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),                                        # Estamos creando el path a la pagina home
    path('home', views.login),                                   # Estamos creando el path a la pagina home
    path('logout', views.logout),                                # Reseteamos los datos de la Sesion
    path('datos/<int:nodos>&<str:magnitudFisica>', views.datos), # Enviamos los datos, esto es un endpoint
    path('dashboard', views.dashboard),                          # Página de vizualización de datos                         # Página de vizualización de datos
]
