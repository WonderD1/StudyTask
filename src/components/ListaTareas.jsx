import Tarea from "./Tarea.jsx";

function ListaTareas({ tareas, alCambiarEstado, alEliminar }) {
  if (tareas.length === 0) {
    return (
      <div className="estado-vacio">
        <span aria-hidden="true">✓</span>
        <h3>No hay tareas en esta vista</h3>
        <p>Prueba otro filtro o agrega una nueva tarea.</p>
      </div>
    );
  }

  return (
    <div className="lista-tareas">
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          alCambiarEstado={alCambiarEstado}
          alEliminar={alEliminar}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
