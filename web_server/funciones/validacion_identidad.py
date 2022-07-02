from web_server.funciones.sha256 import hasheo_dato

def validacion_de_identidad(request,conexion_peticion):
    # Si el metodo es post, comparamos en la db el usuario
    if request.method == "POST":
        # Traemos los usuarios de la db
        usuarios_db = conexion_peticion('select usuario from usuarios');
        usuarios_db = [i[0] for i in usuarios_db];

        # Traemos las contraseñas de la db
        contraseña_db = conexion_peticion('select contraseña from usuarios');
        contraseña_db = [i[0] for i in contraseña_db];

        # User y contraseña del formulario
        usuario     = request.POST.get('usuario');
        contraseña  = request.POST.get('contraseña');

        # Validación
        if usuario in usuarios_db:
            if contraseña in contraseña_db:
                return True
            else:
                return False
        else:
            return False

    # Si el metodo es get, le pedimos datos de su Sesion para verificar
    if request.method == "GET":
        # Traemos los usuarios de la db
        usuarios_db = conexion_peticion('select usuario from usuarios');
        usuarios_db = [i[0] for i in usuarios_db];

        # Traemos las contraseñas de la db
        contraseña_db = conexion_peticion('select contraseña from usuarios');
        contraseña_db = [i[0] for i in contraseña_db];

        # User y hash del formulario
        usuario     = request.session['usuario'];
        hash        = request.session['hash'];

        # Buscamos la coincidencia
        for n in range(len(usuarios_db)):
            if (hasheo_dato(usuarios_db[n],contraseña_db[n]) == hash):
                return True;
    else:
        return False

# Validacion hash (sesion)
def validacion_hash(id,conexion_peticion):

    # Traemos los usuarios de la db
    usuarios_db = conexion_peticion('select usuario from usuarios');
    usuarios_db = [i[0] for i in usuarios_db];

    # Traemos las contraseñas de la db
    contraseña_db = conexion_peticion('select contraseña from usuarios');
    contraseña_db = [i[0] for i in contraseña_db];

    # Retornamos el valor
    for i in range(len(contraseña_db)):
        hash = hasheo_dato(usuarios_db[i],contraseña_db[i]);

        if hash == id:
            return True

    return False
