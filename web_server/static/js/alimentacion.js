// Pedimos los datos con fetch para el gráfico de lineas
  
fetch("http://localhost:80/datos/1&Voltaje").then((response) => response.json()).then(json =>
  grafico_linea(json['fecha'],json['medicion'],0,3000,json['entidad_fisica'][0],'graficoDeLineas')
);

fetch("http://localhost:80/datos/1&Amperaje").then((response) => response.json()).then(json =>
  grafico_linea(json['fecha'],json['medicion'],0,2000,json['entidad_fisica'][0],'graficoDeLineas_2')
);

fetch("http://localhost:80/datos/1&Amperaje").then((response) => response.json()).then(json =>
  grafico_linea(json['fecha'],json['medicion'],0,2000,json['entidad_fisica'][0],'graficoDeLineas_3')
);
  