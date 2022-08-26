// Pedimos los datos con fetch para el gráfico de lineas
fetch("http://localhost:80/datos").then((response) => response.json()).then(json =>
  grafico_linea(json['fecha'],json['medicion'],0,3000,json['entidad_fisica'][0])
);
