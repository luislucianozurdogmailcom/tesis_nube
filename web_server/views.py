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
    # Parametros por defecto de la session

    request.session['usuario'] = request.session.get('usuario', '');
    request.session['hash']    = request.session.get('hash', '');

    # Validamos
    validacion_es_true = validacion_de_identidad(request, conexion_peticion);

    if (validacion_es_true and request.method == "POST"):
        # Creamos un hash de Sesion (siempre será igual)
        hash    = hasheo_dato(request.POST.get('usuario'),request.POST.get('contraseña'));

        # Guardamos los datos en la session
        request.session['usuario'] = request.POST.get('usuario');
        request.session['hash']    = hash;

        # Creamos el contexto de datos
        context = {
            'usuario'   : request.POST.get('usuario'),
            'hash'      : hash,
        }
        return render(request,'landing.html',context);
    elif (validacion_es_true and request.method == "GET"):

        # Creamos el contexto de datos
        context = {
            'usuario'   : request.session['usuario'],
            'hash'      : request.session['hash'],
        }

        return render(request,'landing.html',context);
    else:
        #raise ValueError(request.session['usuario'])
        return render(request, 'login.html', {'advertencia':'Contraseña o usuario Incorrecto','color':'red'})

# Funcion de logout
def logout(request):
    # Reseteamos los datos de la sesion
    request.session['usuario'] = '';
    request.session['hash']    = '';

    # Cargamos la pagina de login
    return render(request, 'login.html', {'advertencia':'Inicia Sesion','color':'gray'})

def prueba(request):

    request.session['usuario'] = request.session.get('usuario', 'asd');
    #request.session['usuario'] = 'asd'

    return render(request, 'prueba.html')
