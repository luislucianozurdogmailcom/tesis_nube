
function grafico_linea(x,y,y_min,y_max,nombre){

  // Seteamos la info
  const data = {
    labels: x,
    datasets: [{
      label: nombre,
      data: y,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  };


  // Configuramos el gráfico
  const config_line = {
    type: 'line',
    data: data,
    options: {
      animations: {
        tension: {
          duration: 2000,
          easing: 'easeInSine',
          from: 0.2,
          to: 0,
          loop: true,
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: y_min,
          max: y_max
        }
      }
    }
  };

  // Hacemos el gráfico
  const ctx = document.getElementById('graficoDeLineas').getContext('2d');

  const stackedLine = new Chart(ctx, config_line);
}
