import { useState } from "react";

function FormularioTarea({ alAgregar }) {
  const [nombre, setNombre] = useState("");
  const [curso, setCurso] = useState("");
  const [fecha, setFecha] = useState("");
  const [prioridad, setPrioridad] = useState("Media");

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (!nombre.trim() || !curso.trim() || !fecha) {
      return;
    }

    alAgregar({
      nombre: nombre.trim(),
      curso: curso.trim(),
      fecha,
      prioridad,
    });

    setNombre("");
    setCurso("");
    setFecha("");
    setPrioridad("Media");
  }

  return (
    <aside className="formulario-contenedor">
      <span className="subtitulo">Nueva actividad</span>
      <h2>Agregar tarea</h2>
      <p className="texto-ayuda">
        Completa los datos para añadir una entrega a tu planificación.
      </p>

      <form onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre de la tarea</label>
        <input
          id="nombre"
          type="text"
          placeholder="Ej. Preparar presentación"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          required
        />

        <label htmlFor="curso">Curso</label>
        <input
          id="curso"
          type="text"
          placeholder="Ej. Programación Web"
          value={curso}
          onChange={(evento) => setCurso(evento.target.value)}
          required
        />

        <div className="campos-en-fila">
          <div>
            <label htmlFor="fecha">Fecha de entrega</label>
            <input
              id="fecha"
              type="date"
              value={fecha}
              onChange={(evento) => setFecha(evento.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="prioridad">Prioridad</label>
            <select
              id="prioridad"
              value={prioridad}
              onChange={(evento) => setPrioridad(evento.target.value)}
            >
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>
        </div>

        <button className="boton-principal" type="submit">
          <span aria-hidden="true">＋</span> Agregar tarea
        </button>
      </form>
    </aside>
  );
}

export default FormularioTarea;
