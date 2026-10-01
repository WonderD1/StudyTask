function Tarea({ tarea, alCambiarEstado, alEliminar }) {
  const fechaFormateada = new Date(`${tarea.fecha}T00:00:00`).toLocaleDateString(
    "es-PE",
    { day: "2-digit", month: "short", year: "numeric" },
  );

  return (
    <article className={tarea.completada ? "tarea tarea--completada" : "tarea"}>
      <button
        className="boton-estado"
        type="button"
        onClick={() => alCambiarEstado(tarea.id)}
        aria-label={
          tarea.completada
            ? `Marcar ${tarea.nombre} como pendiente`
            : `Marcar ${tarea.nombre} como completada`
        }
      >
        {tarea.completada ? "✓" : ""}
      </button>

      <div className="tarea__informacion">
        <div className="tarea__titulo">
          <h3>{tarea.nombre}</h3>
          <span className={`prioridad prioridad--${tarea.prioridad.toLowerCase()}`}>
            {tarea.prioridad}
          </span>
        </div>
        <div className="tarea__detalles">
          <span>{tarea.curso}</span>
          <span aria-hidden="true">•</span>
          <span>Entrega: {fechaFormateada}</span>
        </div>
      </div>

      <button
        className="boton-eliminar"
        type="button"
        onClick={() => alEliminar(tarea.id)}
        aria-label={`Eliminar ${tarea.nombre}`}
        title="Eliminar tarea"
      >
        ×
      </button>
    </article>
  );
}

export default Tarea;
