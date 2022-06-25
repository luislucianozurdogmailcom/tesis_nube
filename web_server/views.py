from django.http      import HttpResponse
from django.shortcuts import render,redirect
from django.template  import Template,Context

# Importamos funciones
from web_server.funciones.conexion_db          import conexion_peticion
from web_server.funciones.validacion_identidad import validacion_de_identidad,validacion_hash
from web_server.funciones.sha256               import hasheo_dato

# Pagina de prueba login como plantilla
def home(request):
    return render(request, 'login.html',{'advertencia':'Inicia Sesion','color':'gray'})

# Validación de usuario
def login(request):

    # Validamos
    validacion_es_true = validacion_de_identidad(request, conexion_peticion);

    if validacion_es_true:
        # Creamos un hash y redirigimos
        hash = hasheo_dato(request.POST.get('usuario'),request.POST.get('contraseña'));
        return redirect('/home/' + hash + '/' + request.POST.get('usuario'));
    else:
        return render(request, 'login.html', {'advertencia':'Contraseña o usuario Incorrecto','color':'red'})

# Pagina home una vez ya redirigido
def lading(request,id,user):
    if validacion_hash(id, conexion_peticion):
        return render(request, 'landing.html',{'usuario': user})#,{'usuario':request.POST.get('usuario')});
    else:
        return render(request, 'login.html', {'advertencia':'Su hash es incorrecto','color':'red'})
