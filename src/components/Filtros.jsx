function Filtros({ filtroActivo, alCambiarFiltro }) {
  const opciones = ["Todas", "Pendientes", "Completadas"];

  return (
    <div className="filtros" aria-label="Filtros de tareas">
      {opciones.map((opcion) => (
        <button
          className={filtroActivo === opcion ? "filtro filtro--activo" : "filtro"}
          key={opcion}
          type="button"
          onClick={() => alCambiarFiltro(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
