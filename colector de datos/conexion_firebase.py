import firebase_admin
from firebase_admin import credentials
from google.cloud import firestore
from utils import setear_variable_de_entorno

# Seteamos las variables de entorno
setear_variable_de_entorno('/paneles-solares-ungs-firebase.json');

# Nos autenticamos en firebase
cred = credentials.Certificate('paneles-solares-ungs-firebase.json');
firebase_admin.initialize_app(cred)


# Probamos insertar un dato
"""
db = firestore.Client()
data = {
    "id_nodo": "2",
    "locacion": "Laboratorio de ingenieria"
}
db.collection("nodos").add(data)
"""

# Funciones
def insertar_medicion(id_medicion, id_nodo, id_sensor, valor, fecha):
    
    db = firestore.Client()
    data = {
        "id_medicion" : id_medicion, 
        "id_nodo"     : id_nodo, 
        "id_sensor"   : id_sensor, 
        "valor"       : valor, 
        "fecha"       : fecha
    }

    #db.collection("mediciones").document(str(id_medicion)).set(data);
    db.collection("mediciones").add(data);

def buscar_medicion(campo_valores = None):

    db         = firestore.Client();

    documentos = db.collection("mediciones").document()

    print(documentos);


buscar_medicion()