// queries.js


// -------------------------------------------------------
// ---- Función que arma la query para traer mediciones---
// ---- efectivas ----------------------------------------
// -------------------------------------------------------
export const query_mediciones_efectivas = () => {
    return `with a as (
    select
      'mediciones efectivas' as etiqueta,
      sum(
         case when valor > 0.01 then 1
         else 0 end 
       ) as valor
     from
       mediciones
     ),
  b as (
   select
      'mediciones en cero' as etiqueta,
      count(valor) - sum(
         case when valor > 0.01 then 1
         else 0 end 
       ) as valor
     from
       mediciones
    )
  select * from a
  union all
  select * from b`
};

export const query_medicion_x_sensor_activo = () => {
  return `select
    	s.sensor,
    	count(m.id_medicion) as mediciones
    from
    	parametrizacion p
    inner join sensores s on
    	s.id_sensor = p.id_sensor
    inner join mediciones m on
    	m.id_parametrizacion = p.id_parametrizacion
    where
    	s.encendido = true
    group by 
    	s.sensor `
};

export const query_sensores_activos = () => {
  return `
    with parametrizaciones_activas as (
    select
    		s.id_sensor,
    		s.sensor,
    		s.pin_en_placa,
        s.encendido,
    		p.id_parametrizacion,
    		row_number() over(partition by s.pin_en_placa order by p.id_parametrizacion desc) as mayor_id
    from
    		parametrizacion p
    join sensores s on
    	s.id_sensor = p.id_sensor
    )
    select id_sensor, pin_en_placa, sensor, encendido from parametrizaciones_activas
    where mayor_id = 1`
};