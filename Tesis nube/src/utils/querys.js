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