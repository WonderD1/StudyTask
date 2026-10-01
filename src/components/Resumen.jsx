function Resumen({ total, pendientes, completadas }) {
  const estadisticas = [
    { nombre: "Total", cantidad: total, clase: "total" },
    { nombre: "Pendientes", cantidad: pendientes, clase: "pendientes" },
    { nombre: "Completadas", cantidad: completadas, clase: "completadas" },
  ];

  return (
    <div className="resumen" aria-label="Resumen de tareas">
      {estadisticas.map((estadistica) => (
        <article className="tarjeta-resumen" key={estadistica.nombre}>
          <span className={`indicador indicador--${estadistica.clase}`}></span>
          <div>
            <strong>{estadistica.cantidad}</strong>
            <span>{estadistica.nombre}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Resumen;
