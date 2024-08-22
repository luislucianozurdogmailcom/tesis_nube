import can

# Configuración del bus CAN (ejemplo para socketcan)
bus = can.interface.Bus(bustype='robotell',channel='/dev/ttyUSB0',ttyBaudrate=115200, bitrate=250000)

query = [0,1,3,3,0,0,0,0];
id    = 385;

# Creación y envío del mensaje
msg = can.Message(arbitration_id=id, data=query, is_extended_id=False)
bus.send(msg)
print("Mensaje enviado en formato hexadecimal de consulta sobre el pin numero 1")

# Recepción de la respuesta
response = bus.recv(timeout=1.0)  # Timeout en segundos

if response:
    print("Respuesta recibida:")
    print(f"ID: {hex(response.arbitration_id)}")
    print(f"Data: {response.data.hex()}")
else:
    print("No se recibió respuesta dentro del tiempo de espera.")
