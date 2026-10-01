# Guía de exposición de StudyTask

Duración objetivo: 35 a 40 minutos. Cada integrante dispone de aproximadamente 7 minutos. Conviene ensayar una vez con cronómetro y dejar 2 o 3 minutos finales para preguntas generales.

## Preparación antes de entrar al aula

1. Ejecutar `npm install` con anticipación.
2. Comprobar `npm run build`.
3. Abrir dos ventanas: editor de código y navegador.
4. Aumentar el tamaño de letra del editor.
5. Tener abierta la carpeta `src` y cerrados archivos irrelevantes.
6. Ejecutar `npm run dev` y conservar la URL de Vite.
7. Desactivar notificaciones y cerrar pestañas personales.
8. Decidir quién controla el teclado durante cada sección.

## Cronograma total

| Integrante | Tema | Tiempo sugerido |
| --- | --- | --- |
| 1 | Problema, stack, Vite y entrada de React | 7 minutos |
| 2 | Componentes, JSX, props y resumen | 7 minutos |
| 3 | Formulario, estado y eventos | 8 minutos |
| 4 | Estado principal, arrays y filtros | 8 minutos |
| 5 | Renderizado, CSS, demostración y cierre | 8 minutos |
| Total | Presentación completa | 38 minutos |

## Integrante 1: contexto, estructura y arranque

### Tema

Presentar el problema, las tecnologías, la estructura de carpetas y el recorrido desde `index.html` hasta `App`.

### Archivos que muestra

- `package.json`
- `index.html`
- `src/main.jsx`
- Árbol de carpetas completo

### Bloques que explica

1. `scripts` y `dependencies` en `package.json`.
2. `<div id="root"></div>` y el script de módulo en `index.html`.
3. Los cuatro imports de `main.jsx`.
4. `createRoot(...).render(...)`.

### Texto sugerido

“Buenos días. Nuestro proyecto se llama StudyTask y responde a un problema cotidiano: durante el semestre tenemos entregas de varios cursos y necesitamos ver rápidamente qué está pendiente. Construimos una aplicación de una sola página para registrar, completar, filtrar y eliminar tareas.”

“Elegimos React para dividir la interfaz en componentes. Vite prepara el entorno, transforma JSX y actualiza el navegador mientras programamos. JavaScript contiene la lógica, CSS la presentación, Node.js ejecuta las herramientas y npm instala las dependencias. Node no se usa aquí como servidor de backend.”

“En la raíz tenemos `index.html` y `package.json`. Dentro de `src` están el punto de entrada, el componente principal, los estilos y la carpeta de componentes. Esta separación hace que cada archivo tenga una responsabilidad.”

“En `index.html`, el `div` con id root está inicialmente vacío. Es el punto de montaje. La última línea carga `main.jsx` como módulo.”

“En `main.jsx`, importamos React, la función para crear la raíz, nuestro componente App y el CSS. `document.getElementById` encuentra el contenedor real. React toma ese lugar y renderiza `<App />`. `StrictMode` nos ayuda durante el desarrollo a detectar prácticas problemáticas.”

“Cuando ejecutamos `npm run dev`, npm lee el script y Vite inicia el servidor. Cuando ejecutamos `npm run build`, Vite revisa y optimiza el proyecto para producción.”

### Demostración

Mostrar la terminal con la URL de Vite, abrir la página y señalar que toda la interfaz visible nació dentro del `div root`.

### Preguntas posibles

**¿React reemplaza a HTML?**  
No. React termina creando elementos del DOM. JSX es una forma más cómoda de describirlos desde JavaScript.

**¿Vite y React son lo mismo?**  
No. React construye la interfaz; Vite ofrece el servidor de desarrollo y crea el paquete final.

**¿Por qué los archivos terminan en `.jsx`?**  
Porque contienen JavaScript con sintaxis JSX.

**¿Qué es npm?**  
Es el gestor de paquetes que instala dependencias y ejecuta scripts del proyecto.

## Integrante 2: componentes, JSX y props

### Tema

Explicar cómo la interfaz se divide en componentes y cómo pasan los datos desde `App` hacia `Navbar` y `Resumen`.

### Archivos que muestra

- La parte del `return` de `src/App.jsx`
- `src/components/Navbar.jsx`
- `src/components/Resumen.jsx`

### Bloques que explica

1. Fragment `<>...</>` y composición en `App`.
2. Función, `return` y export de `Navbar`.
3. Props de `Resumen`.
4. Array `estadisticas` y su `map`.
5. `key` y template literal de clases.

### Texto sugerido

“Un componente es una función que devuelve JSX. JSX se parece a HTML, pero vive dentro de JavaScript. Usamos `className` y colocamos expresiones entre llaves.”

“App compone toda la pantalla. En lugar de escribir cientos de líneas seguidas, inserta etiquetas como `<Navbar />` y `<Resumen />`. El Fragment agrupa el resultado sin añadir un contenedor innecesario al HTML.”

“Navbar es un componente de presentación. No necesita estado porque siempre muestra el mismo logo y los mismos enlaces. Al final se exporta para que App pueda importarlo.”

“Resumen sí necesita datos que cambian. App calcula total, pendientes y completadas y los entrega como props. Las props son como argumentos de una función: permiten reutilizar un componente con datos distintos.”

“Dentro de Resumen convertimos esos tres números en un array y usamos `map`. Por cada objeto, `map` devuelve una tarjeta. React necesita una `key` para identificar de forma estable cada elemento de la lista.”

“La clase del indicador se arma con un template literal. De esa manera obtenemos clases distintas para total, pendientes y completadas sin repetir la tarjeta completa.”

### Demostración

Completar una tarea desde la interfaz y señalar cómo `Resumen` cambia aunque su archivo no modifica datos: recibe props nuevas y React lo vuelve a renderizar.

### Preguntas posibles

**¿Por qué los componentes empiezan con mayúscula?**  
Para que JSX distinga un componente propio de una etiqueta HTML normal.

**¿Un hijo puede cambiar una prop?**  
No debe hacerlo. La trata como solo lectura y solicita cambios ejecutando una función recibida.

**¿Para qué sirve `key`?**  
Ayuda a React a reconocer cada elemento entre renderizaciones y actualizar listas eficientemente.

**¿Por qué no copiar tres tarjetas manualmente?**  
Con `map` reducimos repetición y mantenemos una única estructura visual.

## Integrante 3: formulario, estado local y eventos

### Tema

Explicar `useState`, campos controlados, eventos y el envío de una tarea al padre.

### Archivos que muestra

- `src/components/FormularioTarea.jsx`

### Bloques que explica

1. Import de `useState`.
2. Los cuatro estados del formulario.
3. `manejarEnvio` completo.
4. Un input como ejemplo de campo controlado.
5. Select y botón submit.

### Texto sugerido

“El formulario contiene información temporal que solo importa mientras el usuario escribe. Por eso sus cuatro campos viven como estado local dentro de FormularioTarea.”

“`useState` devuelve el valor actual y una función para actualizarlo. En el primer campo, `nombre` es el valor y `setNombre` es el setter.”

“Este input es controlado. Su propiedad `value` viene del estado. Cada vez que el usuario escribe, ocurre `onChange`; recibimos el evento, leemos `evento.target.value` y actualizamos el estado.”

“Cuando se presiona el botón, el formulario dispara `onSubmit`. Primero usamos `preventDefault` para evitar la recarga tradicional del navegador. Validamos que los campos no estén vacíos y usamos `trim` para quitar espacios innecesarios.”

“Después ejecutamos `alAgregar`. Esta función llegó como prop desde App. Le entregamos un objeto con los cuatro datos. Finalmente vaciamos los campos con sus setters. El formulario no crea el identificador ni administra la lista: esa responsabilidad pertenece al padre.”

“Este es un ejemplo del flujo de React: la interacción ocurre en el hijo, el hijo informa al padre mediante una función y el padre actualiza el estado compartido.”

### Demostración

Escribir “Preparar exposición”, curso “Programación Web”, elegir una fecha y prioridad Alta. Antes de enviar, señalar cómo cada campo representa un estado. Enviar y mostrar cómo se limpia el formulario y aparece la tarjeta.

### Preguntas posibles

**¿Por qué no leer los inputs directamente con `document.querySelector`?**  
Porque en React preferimos que el estado sea la fuente de verdad. Así los valores y la interfaz se mantienen sincronizados.

**¿Qué hace `preventDefault`?**  
Evita el envío HTML tradicional que recargaría la página.

**¿Por qué el estado del formulario no está en App?**  
Porque ningún otro componente necesita el texto mientras se escribe. Mantenerlo local reduce complejidad.

**¿Para qué sirve `required` si ya hay validación?**  
Ofrece validación básica del navegador; la comprobación en JavaScript protege también la función.

## Integrante 4: estado compartido, map, filter y spread

### Tema

Explicar la lógica central de `App`, la inmutabilidad y el funcionamiento de los filtros.

### Archivos que muestra

- Parte superior y funciones de `src/App.jsx`
- `src/components/Filtros.jsx`

### Bloques que explica

1. `tareasIniciales`.
2. Los dos estados de App.
3. `agregarTarea`.
4. `cambiarEstado`.
5. `eliminarTarea`.
6. `tareasFiltradas` y contadores.
7. Botones creados con `map` en Filtros.

### Texto sugerido

“App posee la fuente principal de datos porque varios componentes necesitan las tareas. El array inicial contiene objetos con la misma estructura. `useState` conserva ese array entre renderizaciones.”

“Al agregar, construimos un objeto nuevo. `Date.now()` funciona aquí como identificador sencillo. El spread copia los datos del formulario y establecemos `completada` en falso. Luego otro spread copia las tareas anteriores y añade la nueva.”

“No usamos `push` porque modificaría directamente el array. En React preferimos crear una referencia nueva para que el cambio sea predecible.”

“Para completar usamos `map`. Recorremos todas las tareas. Cuando encontramos el mismo id, copiamos el objeto e invertimos el booleano con signo de exclamación. Las demás tareas se devuelven intactas.”

“Para eliminar usamos `filter`. Conservamos todos los objetos cuyo id sea diferente. No borramos directamente; creamos otro array.”

“El filtro visible también usa `filter`, pero no cambia el estado original. Solo deriva lo que se mostrará. Si elegimos Pendientes, conserva valores falsos; si elegimos Completadas, conserva verdaderos; y Todas devuelve true para cada elemento.”

“Los contadores también son datos derivados. Guardarlos como estados separados podría provocar inconsistencias. Es más seguro calcularlos desde `tareas`.”

### Demostración

Alternar entre los tres filtros. Marcar una tarea y enseñar que migra de Pendientes a Completadas. Eliminarla y señalar que los contadores se recalculan.

### Preguntas posibles

**¿Cuál es la diferencia entre `map` y `filter`?**  
`map` devuelve un resultado por cada elemento; `filter` puede conservar solo algunos.

**¿Qué hace el spread operator?**  
Copia elementos de un array o propiedades de un objeto dentro de uno nuevo.

**¿Por qué no hay estados para total y pendientes?**  
Porque pueden calcularse siempre desde el array; duplicarlos aumentaría el riesgo de desincronización.

**¿`Date.now()` sirve para una aplicación real multiusuario?**  
Es suficiente para esta app local educativa. En un sistema real la base de datos debería generar identificadores robustos.

## Integrante 5: lista, renderizado condicional, CSS y demostración final

### Tema

Explicar cómo se dibuja cada tarea, cómo responde el diseño y cerrar con la demostración completa.

### Archivos que muestra

- `src/components/ListaTareas.jsx`
- `src/components/Tarea.jsx`
- Secciones representativas de `src/styles.css`

### Bloques que explica

1. Retorno temprano del estado vacío.
2. `tareas.map` y paso de props.
3. Fecha formateada y clases condicionales.
4. Eventos de completar y eliminar.
5. Grid, Flexbox, modificadores y media queries en CSS.

### Texto sugerido

“ListaTareas recibe el array ya filtrado. Si su longitud es cero, usa renderizado condicional y muestra un estado vacío. Si hay datos, `map` crea un componente Tarea por cada objeto.”

“Tarea recibe el objeto y las dos acciones. Formateamos la fecha para que sea legible. La clase principal depende del booleano `completada`; cuando es verdadero, CSS muestra la casilla verde y tacha el título.”

“Los botones usan arrow functions para enviar el id correcto. También agregamos `aria-label`, porque un lector de pantalla necesita algo más descriptivo que una marca o una equis.”

“En CSS usamos nombres que indican elemento y modificación, como `tarea__titulo` y `tarea--completada`. Grid resuelve las estructuras de columnas; Flexbox organiza grupos en una dirección.”

“Las media queries cambian la distribución debajo de 900 y 600 píxeles. No creamos otra página móvil: la misma interfaz reorganiza columnas, espacios y tarjetas según el ancho.”

“Ahora realizaremos el flujo completo para comprobar que la interfaz y los datos se mantienen sincronizados.”

### Demostración final

1. Confirmar los tres contadores iniciales.
2. Agregar una tarea con todos sus campos.
3. Marcarla como completada.
4. Mostrarla con el filtro Completadas.
5. Volver a Todas.
6. Eliminar la tarea.
7. Reducir el ancho para mostrar la vista móvil.
8. Cerrar con la pantalla completa y el resumen.

### Frase de cierre sugerida

“StudyTask cumple el objetivo de gestionar tareas universitarias y, al mismo tiempo, demuestra los fundamentos de React: componentes, JSX, props, estado, eventos, listas y renderizado condicional. Mantuvimos una arquitectura sencilla que podemos explicar y ampliar.”

### Preguntas posibles

**¿Qué es renderizado condicional?**  
Es decidir qué JSX devolver según una condición, como mostrar el estado vacío o una lista.

**¿Cómo se adapta a celulares?**  
Con media queries que cambian Grid, tamaños y espacios cuando disminuye el ancho.

**¿La aplicación es accesible?**  
Incluye etiquetas para formularios, foco visible, botones semánticos, navegación, textos alternativos para acciones y contraste legible. Aún podría someterse a una auditoría más completa.

**¿Por qué las tareas reaparecen al recargar?**  
Porque viven solo en memoria. La persistencia quedó fuera para mantener el proyecto centrado en React básico.

## Preguntas grupales adicionales

**¿Dónde ocurre el flujo de arriba hacia abajo?**  
App entrega datos a Resumen y ListaTareas mediante props.

**¿Dónde ocurre la comunicación de abajo hacia arriba?**  
Los hijos ejecutan funciones recibidas: el formulario llama `alAgregar` y cada tarea llama `alCambiarEstado` o `alEliminar`.

**¿Qué sucede cuando se llama un setter?**  
React guarda el nuevo estado, ejecuta otra renderización y actualiza en el DOM las partes que cambiaron.

**¿Qué diferencia hay entre HTML `class` y JSX `className`?**  
En JSX se usa `className`; React lo convierte al atributo `class` del HTML final.

**¿Por qué los nombres de funciones como `alEliminar` son props?**  
Describen el evento que el hijo comunica y evitan que el hijo conozca cómo se administra el array.

## Plan de contingencia

- Si no hay internet, la app funciona después de haber ejecutado `npm install`; la fuente externa puede reemplazarse visualmente por una fuente del sistema sin afectar la lógica.
- Si el servidor se detiene, ejecutar otra vez `npm run dev`.
- Si una demostración deja datos inesperados, recargar para recuperar las tareas iniciales.
- Si no se puede proyectar la vista móvil, reducir manualmente el ancho de la ventana.
- Si hay poco tiempo, cada integrante elimina un ejemplo secundario, pero conserva su demostración y definición principal.

## Ensayo recomendado

En el primer ensayo, leer el guion y medir tiempos. En el segundo, hablar mirando al público y usar el texto solo como apoyo. En el tercero, practicar cambios entre integrantes, quién controla el teclado y cómo responder una pregunta sin interrumpirse.
