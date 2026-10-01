import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Resumen from "./components/Resumen.jsx";
import FormularioTarea from "./components/FormularioTarea.jsx";
import Filtros from "./components/Filtros.jsx";
import ListaTareas from "./components/ListaTareas.jsx";

const tareasIniciales = [
  {
    id: 1,
    nombre: "Terminar informe de investigación",
    curso: "Metodología",
    fecha: "2026-10-05",
    prioridad: "Alta",
    completada: false,
  },
  {
    id: 2,
    nombre: "Practicar ejercicios de JavaScript",
    curso: "Programación Web",
    fecha: "2026-10-08",
    prioridad: "Media",
    completada: false,
  },
  {
    id: 3,
    nombre: "Leer capítulo 4",
    curso: "Comunicación",
    fecha: "2026-10-02",
    prioridad: "Baja",
    completada: true,
  },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState("Todas");

  function agregarTarea(datosNuevaTarea) {
    const nuevaTarea = {
      id: Date.now(),
      ...datosNuevaTarea,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
  }

  function cambiarEstado(id) {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }

      return tarea;
    });

    setTareas(tareasActualizadas);
  }

  function eliminarTarea(id) {
    const tareasRestantes = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasRestantes);
  }

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "Pendientes") {
      return !tarea.completada;
    }

    if (filtro === "Completadas") {
      return tarea.completada;
    }

    return true;
  });

  const total = tareas.length;
  const completadas = tareas.filter((tarea) => tarea.completada).length;
  const pendientes = total - completadas;

  return (
    <>
      <Navbar />

      <main className="contenedor" id="inicio">
        <section className="portada">
          <div className="portada__texto">
            <span className="etiqueta">Tu semestre, bajo control</span>
            <h1>Organiza tus entregas sin complicarte.</h1>
            <p>
              Registra tus trabajos, revisa lo que falta y celebra cada tarea
              terminada desde un solo lugar.
            </p>
          </div>

          <Resumen
            total={total}
            pendientes={pendientes}
            completadas={completadas}
          />
        </section>

        <section className="panel-principal" id="tareas">
          <FormularioTarea alAgregar={agregarTarea} />

          <div className="seccion-tareas">
            <div className="seccion-tareas__encabezado">
              <div>
                <span className="subtitulo">Mi planificación</span>
                <h2>Lista de tareas</h2>
              </div>
              <span className="cantidad-visible">
                {tareasFiltradas.length} visibles
              </span>
            </div>

            <Filtros filtroActivo={filtro} alCambiarFiltro={setFiltro} />

            <ListaTareas
              tareas={tareasFiltradas}
              alCambiarEstado={cambiarEstado}
              alEliminar={eliminarTarea}
            />
          </div>
        </section>
      </main>

      <footer>
        <p>StudyTask · Proyecto de Programación Web</p>
      </footer>
    </>
  );
}

export default App;
