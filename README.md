# StudyTask

StudyTask es un gestor de tareas universitarias creado con React, Vite, JavaScript y CSS. El proyecto está pensado para cinco estudiantes que recién empiezan a trabajar con frameworks. Por eso el código usa nombres descriptivos, componentes pequeños y una única fuente principal de datos.

La aplicación permite:

- Agregar una tarea con nombre, curso, fecha y prioridad.
- Ver todas las tareas en tarjetas.
- Marcar una tarea como completada o devolverla a pendiente.
- Eliminar una tarea.
- Filtrar por Todas, Pendientes y Completadas.
- Ver contadores actualizados de total, pendientes y completadas.
- Adaptarse a computadoras, tabletas y celulares.

> Importante: no existe un backend ni una base de datos. Al recargar la página se restauran las tres tareas de ejemplo. Esto es intencional: permite concentrarse en los fundamentos de React sin agregar todavía persistencia de datos.

## 1. Tecnologías utilizadas

| Tecnología | Papel en el proyecto |
| --- | --- |
| React | Construye la interfaz a partir de componentes y actualiza la pantalla cuando cambia el estado. |
| Vite | Crea el entorno de desarrollo, procesa los archivos y genera la versión de producción. |
| JavaScript | Contiene la lógica: agregar, filtrar, completar y eliminar tareas. |
| CSS | Define colores, espacios, tamaños, diseño adaptable y estados visuales. |
| Node.js | Ejecuta las herramientas de desarrollo en la computadora. No funciona como backend en este proyecto. |
| npm | Instala las dependencias y ejecuta los comandos definidos en `package.json`. |

No se usa TypeScript, backend, base de datos, Bootstrap ni otras librerías de interfaz.

## 2. Cómo instalar y ejecutar

### Requisitos

Instalar una versión reciente de Node.js. Al instalar Node.js también se instala npm.

Para verificar la instalación, abrir una terminal y ejecutar:

```bash
node --version
npm --version
```

Ambos comandos deben mostrar un número de versión.

### Primera ejecución

1. Abrir una terminal dentro de la carpeta `StudyTask`.
2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Vite mostrará una dirección parecida a `http://localhost:5173/`.
5. Abrir esa dirección en el navegador.
6. Para detener el servidor, volver a la terminal y presionar `Ctrl + C`.

### Comprobar la versión final

```bash
npm run build
```

Este comando revisa el proyecto y crea la carpeta `dist` con archivos optimizados. Si termina sin errores, la aplicación compila correctamente.

Para revisar esa versión final localmente:

```bash
npm run preview
```

## 3. Qué papel cumple Vite

Vite es la herramienta que prepara el entorno del proyecto. Durante el desarrollo:

1. Levanta un servidor local.
2. Lee `index.html`.
3. Encuentra el módulo `/src/main.jsx`.
4. Procesa JSX y los imports.
5. Actualiza el navegador casi al instante cuando guardamos un cambio.

Al ejecutar `npm run build`, Vite combina y optimiza los archivos para publicación. Vite no reemplaza a React: React construye la interfaz; Vite permite desarrollar y empaquetar el proyecto cómodamente.

## 4. Estructura de carpetas

```text
StudyTask/
├── index.html
├── package.json
├── package-lock.json       Se crea con npm install
├── vite.config.js
├── README.md
├── GUIA_EXPOSICION.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── components/
        ├── Navbar.jsx
        ├── Resumen.jsx
        ├── FormularioTarea.jsx
        ├── Filtros.jsx
        ├── ListaTareas.jsx
        └── Tarea.jsx
```

### Archivos de la raíz

- `package.json`: describe el proyecto, las dependencias y los comandos de npm.
- `package-lock.json`: guarda las versiones exactas instaladas para que todo el grupo use lo mismo.
- `vite.config.js`: activa el complemento oficial que procesa React y actualiza componentes rápidamente durante el desarrollo.
- `index.html`: página HTML inicial que contiene el punto donde React se conecta.
- `.gitignore`: evita subir carpetas generadas como `node_modules` y `dist`.
- `README.md`: manual técnico y didáctico.
- `GUIA_EXPOSICION.md`: reparto y libreto para la presentación de cinco integrantes.

### Carpeta `src`

`src` significa source o código fuente. Aquí viven la lógica, los componentes y los estilos que escribimos.

### Carpeta `components`

Contiene piezas reutilizables de la interfaz. Separarlas evita que `App.jsx` sea un archivo enorme y permite que cada integrante explique una responsabilidad concreta.

## 5. Conceptos previos de JavaScript

### Variables con `const`

```js
const total = tareas.length;
```

`const` crea una variable que no será reasignada. El array guardado en una constante sí puede usarse para crear otro array; lo que no hacemos es asignar otro valor a esa misma constante.

### Arrays

Un array es una lista ordenada entre corchetes:

```js
const opciones = ["Todas", "Pendientes", "Completadas"];
```

Cada posición contiene un elemento. `tareas` también es un array, pero sus elementos son objetos.

### Objetos

Un objeto agrupa propiedades relacionadas entre llaves:

```js
{
  id: 1,
  nombre: "Leer capítulo 4",
  curso: "Comunicación",
  fecha: "2026-10-02",
  prioridad: "Baja",
  completada: true
}
```

Se accede a una propiedad con punto, por ejemplo `tarea.nombre`.

### Funciones tradicionales y arrow functions

Una función con nombre:

```js
function eliminarTarea(id) {
  // instrucciones
}
```

Una arrow function o función flecha:

```js
(tarea) => tarea.id !== id
```

La flecha separa los parámetros de lo que hace la función. Se usa mucho como función corta dentro de `map` y `filter`.

### Spread operator

Los tres puntos `...` copian elementos o propiedades.

```js
setTareas([...tareas, nuevaTarea]);
```

Aquí se crea un nuevo array con todas las tareas anteriores y la nueva al final. React trabaja mejor cuando creamos arrays y objetos nuevos en vez de modificar directamente los existentes.

```js
return { ...tarea, completada: !tarea.completada };
```

Aquí se copian todas las propiedades de `tarea` y luego se reemplaza únicamente `completada`.

### `map`

`map` recorre un array y devuelve otro array con un resultado por cada elemento.

```js
tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
```

En la interfaz convierte cada objeto de tarea en un componente visual `Tarea`.

También se usa para actualizar solo el objeto que coincide con un identificador.

### `filter`

`filter` devuelve un nuevo array que conserva únicamente los elementos cuya condición resulta verdadera.

```js
tareas.filter((tarea) => tarea.id !== id)
```

Se conservan todas las tareas cuyo `id` sea diferente al que se desea eliminar.

### Operadores importantes

- `===`: compara valor y tipo.
- `!==`: significa “es diferente”.
- `!`: niega un booleano; `!true` produce `false`.
- `&&`: exige que ambas condiciones se cumplan.
- `||`: acepta que al menos una condición se cumpla.
- `` `${valor}` ``: template literal; inserta valores dentro de un texto.

## 6. Fundamentos de React

### Qué es un componente

Un componente es una función de JavaScript que devuelve JSX. Su nombre comienza con mayúscula.

```jsx
function Navbar() {
  return <header>...</header>;
}
```

Podemos usarlo como una etiqueta: `<Navbar />`.

### Qué es JSX

JSX permite escribir una estructura parecida a HTML dentro de JavaScript. No es exactamente HTML:

- Usa `className` en lugar de `class`.
- Inserta JavaScript entre llaves: `{tarea.nombre}`.
- Los componentes propios empiezan con mayúscula.
- Las etiquetas deben cerrarse.
- Un componente debe devolver un único árbol. `<>...</>` es un Fragment que agrupa sin crear una etiqueta adicional.

### Imports y exports

```js
import Navbar from "./components/Navbar.jsx";
```

`import` trae código exportado por otro archivo. La ruta comienza con `./` porque es relativa al archivo actual.

```js
export default Navbar;
```

`export default` permite que otro archivo importe ese componente con una importación predeterminada.

### Props

Las props son datos que un componente padre entrega a un componente hijo.

```jsx
<Resumen total={total} pendientes={pendientes} completadas={completadas} />
```

El hijo recibe esas props mediante destructuración:

```js
function Resumen({ total, pendientes, completadas }) {
```

Las props fluyen hacia abajo. Un hijo no debe modificar directamente una prop. Para solicitar un cambio, recibe una función del padre y la ejecuta.

### Estado y `useState`

El estado es información que puede cambiar mientras usamos la app. `useState` devuelve dos elementos:

```js
const [tareas, setTareas] = useState(tareasIniciales);
```

- `tareas`: valor actual.
- `setTareas`: función para actualizarlo.
- `tareasIniciales`: valor de la primera renderización.

Cuando llamamos a `setTareas`, React vuelve a ejecutar el componente y actualiza en pantalla únicamente lo necesario.

### Eventos

Un evento responde a una acción del usuario:

- `onChange`: un campo cambia.
- `onSubmit`: se envía un formulario.
- `onClick`: se hace clic en un botón.

React usa camelCase: la segunda palabra empieza con mayúscula.

### Inputs controlados

```jsx
<input
  value={nombre}
  onChange={(evento) => setNombre(evento.target.value)}
/>
```

El texto visible viene del estado `nombre`. Cada cambio ejecuta `setNombre` con el valor actual del campo. Por eso React conoce siempre el contenido del formulario.

### Renderizado condicional

Permite mostrar algo diferente según una condición.

```js
if (tareas.length === 0) {
  return <div>No hay tareas</div>;
}
```

También se usa el operador ternario:

```jsx
className={tarea.completada ? "tarea tarea--completada" : "tarea"}
```

La condición va antes de `?`, el resultado verdadero después de `?` y el falso después de `:`.

### La prop especial `key`

```jsx
<Tarea key={tarea.id} tarea={tarea} />
```

`key` ayuda a React a identificar cada elemento de una lista. Debe ser única y estable entre elementos hermanos. Se usa `id`, no la posición del array, porque las tareas pueden eliminarse o cambiar de orden.

## 7. Explicación de `index.html`

```html
<!doctype html>
<html lang="es">
```

La primera línea activa el estándar moderno de HTML. `lang="es"` informa que el contenido está en español.

En `<head>` se definen la codificación UTF-8, el ancho adaptable, la descripción y el título de la pestaña.

```html
<div id="root"></div>
```

Es un contenedor inicialmente vacío. React colocará dentro toda la aplicación.

```html
<script type="module" src="/src/main.jsx"></script>
```

Carga el punto de entrada como módulo de JavaScript. Vite entiende la ruta y transforma JSX para el navegador.

## 8. Explicación de `main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
```

1. `StrictMode` ayuda a descubrir prácticas problemáticas durante el desarrollo.
2. `createRoot` conecta React con un elemento real del HTML.
3. Se importa el componente principal `App`.
4. Se importa el CSS global. No se guarda en una variable porque su efecto es aplicar estilos.

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

1. `document.getElementById("root")` busca el `div` de `index.html`.
2. `createRoot(...)` crea la raíz de React.
3. `.render(...)` dibuja la aplicación.
4. `<App />` inicia el árbol de componentes.

## 9. Explicación de `App.jsx`

`App` es el componente padre y el centro de la lógica.

### Imports

Primero importa `useState` y los seis componentes. Cada archivo mantiene una responsabilidad.

### Datos iniciales

`tareasIniciales` es un array de tres objetos. Cada tarea tiene las mismas seis propiedades. Mantener una forma consistente permite que todos los componentes sepan qué datos existen.

### Estados principales

```js
const [tareas, setTareas] = useState(tareasIniciales);
const [filtro, setFiltro] = useState("Todas");
```

El primer estado conserva la lista. El segundo conserva el nombre del filtro seleccionado.

### Agregar

```js
function agregarTarea(datosNuevaTarea) {
  const nuevaTarea = {
    id: Date.now(),
    ...datosNuevaTarea,
    completada: false,
  };
  setTareas([...tareas, nuevaTarea]);
}
```

- Recibe los datos enviados por el formulario.
- `Date.now()` produce un número basado en el instante actual y sirve como identificador sencillo.
- Copia los campos recibidos.
- Toda tarea nueva comienza pendiente.
- Crea un array nuevo con la tarea añadida.

### Cambiar entre pendiente y completada

`map` visita todas las tareas. Si el `id` coincide, devuelve una copia con el booleano invertido. Si no coincide, devuelve la tarea sin cambios. Después `setTareas` guarda el nuevo array.

### Eliminar

`filter` conserva las tareas con un identificador diferente. El resultado ya no contiene la elegida.

### Filtrar para mostrar

El array original no se modifica. `tareasFiltradas` es un valor derivado para la vista:

- Si el filtro es Pendientes, acepta `!tarea.completada`.
- Si es Completadas, acepta `tarea.completada`.
- En cualquier otro caso devuelve `true` y muestra todas.

### Contadores

`total` usa `.length`. `completadas` filtra y cuenta. `pendientes` se obtiene restando completadas al total. No se crean estados separados porque estos números pueden calcularse a partir de `tareas`.

### JSX y composición

`App` coloca `Navbar`, la portada, `Resumen`, el formulario, los filtros, la lista y el pie de página. Las funciones se pasan como props: por ejemplo `alAgregar={agregarTarea}`. Así los hijos pueden provocar cambios sin poseer el array principal.

## 10. Explicación de cada componente

### `Navbar.jsx`

Es un componente de presentación: no necesita estado ni props. Usa enlaces internos a `#inicio` y `#tareas`. `aria-label` describe la navegación para tecnologías de asistencia.

### `Resumen.jsx`

Recibe tres números. Los convierte en un array `estadisticas` y usa `map` para evitar repetir tres tarjetas casi iguales. La `key` es el nombre porque cada estadística tiene un nombre único.

La expresión:

```jsx
className={`indicador indicador--${estadistica.clase}`}
```

crea clases como `indicador--total`. Los backticks permiten insertar el valor con `${...}`.

### `FormularioTarea.jsx`

Mantiene cuatro estados locales porque solo el formulario necesita conocer lo que se está escribiendo.

`manejarEnvio(evento)` realiza cinco pasos:

1. `evento.preventDefault()` evita que el navegador recargue la página.
2. Verifica campos vacíos; `trim()` también considera vacío un texto formado solo por espacios.
3. Ejecuta `alAgregar` y entrega un objeto.
4. El padre crea la tarea completa y actualiza el array.
5. Los cuatro setters limpian el formulario.

El botón tiene `type="submit"`, por eso activa `onSubmit` del formulario. La validación `required` también ayuda desde HTML.

### `Filtros.jsx`

Recibe el filtro actual y la función para cambiarlo. `opciones.map` crea tres botones. Al hacer clic, la arrow function llama `alCambiarFiltro(opcion)`.

La clase activa se decide con un ternario. Esto cambia la apariencia sin mantener un segundo estado visual.

### `ListaTareas.jsx`

Primero comprueba si el array está vacío. Ese retorno temprano muestra un mensaje claro. Si hay datos, `map` crea un componente `Tarea` por objeto y reenvía las dos funciones de acción.

### `Tarea.jsx`

Recibe un objeto y dos funciones. La fecha se transforma a un formato amigable con `toLocaleDateString`.

El primer botón alterna el estado y cambia su texto a `✓`. El título se tacha mediante una clase condicional. La prioridad genera una clase en minúsculas como `prioridad--alta`. El botón final llama a la función de eliminación.

Los `aria-label` incluyen el nombre de la tarea. Esto hace que botones representados por un símbolo tengan una explicación completa para lectores de pantalla.

## 11. Flujo completo de datos

### Al agregar

```text
Usuario escribe
      ↓
FormularioTarea guarda cada campo en su estado local
      ↓
El formulario ejecuta alAgregar(objeto)
      ↓
App recibe el objeto en agregarTarea
      ↓
App crea id y completada: false
      ↓
setTareas guarda un array nuevo
      ↓
React vuelve a renderizar App
      ↓
Cambian Resumen y ListaTareas automáticamente
```

### Al completar

```text
Usuario hace clic en la casilla de Tarea
      ↓
Tarea ejecuta alCambiarEstado(id)
      ↓
App usa map para crear un array actualizado
      ↓
setTareas actualiza el estado
      ↓
Cambian estilo, contadores y filtros
```

### Al eliminar

```text
Usuario hace clic en ×
      ↓
Tarea ejecuta alEliminar(id)
      ↓
App usa filter para excluir ese id
      ↓
React actualiza lista y resumen
```

Esta arquitectura se llama “levantar el estado”: los datos compartidos viven en el ancestro común, `App`, y bajan mediante props.

## 12. Explicación del CSS

### Variables y regla universal

`:root` establece la fuente y los colores generales. `* { box-sizing: border-box; }` hace que ancho y alto incluyan borde y relleno, lo que vuelve más predecible el diseño.

### Clases con metodología tipo BEM

Nombres como `.navbar__contenido` indican un elemento de navbar. Nombres como `.tarea--completada` indican una modificación. No se aplica BEM de manera estricta, pero esta convención ayuda a leer el CSS.

### Flexbox y Grid

- Flexbox organiza elementos en una dirección, por ejemplo logo y enlace o la lista vertical.
- Grid organiza filas y columnas, por ejemplo portada, panel principal y cada tarjeta de tarea.
- `minmax(0, 1fr)` permite que una columna flexible se encoja sin desbordar.

### Estados visuales

- `:hover` cambia estilos al pasar el cursor.
- `:focus-visible` muestra un contorno accesible al navegar con teclado.
- `.filtro--activo` destaca el filtro seleccionado.
- `.tarea--completada` activa casilla verde y texto tachado.
- Las prioridades tienen colores diferentes.

### Diseño adaptable

Las reglas `@media` se activan según el ancho:

- Debajo de 900 px, portada y panel pasan a una sola columna.
- Debajo de 600 px, se reducen espacios, los contadores se apilan y los campos de fecha/prioridad pasan a una columna.

### Accesibilidad visual

Se usan textos oscuros sobre fondos claros, foco visible, etiquetas asociadas con `htmlFor`, botones reales y tamaños cómodos. El color no es la única señal: la tarea completada también tiene marca y tachado, y la prioridad incluye texto.

## 13. Decisiones sencillas del proyecto

- Un solo estado compartido para tareas evita datos duplicados.
- Los contadores se calculan; no se guardan por separado.
- El formulario controla sus propios campos.
- No se mutan arrays ni objetos directamente.
- Las tareas de ejemplo permiten demostrar todo al abrir la página.
- No se usa almacenamiento local para no ocultar el flujo básico de React.
- No se pide confirmación al eliminar para mantener la demostración breve; puede añadirse como mejora futura.

## 14. Cómo demostrar la app en vivo

1. Ejecutar `npm run dev` antes de empezar.
2. Abrir la URL de Vite y comprobar que se ven tres tareas.
3. Señalar los contadores: total 3, pendientes 2, completadas 1.
4. Agregar “Diseñar prototipo”, curso “Programación Web”, una fecha y prioridad Alta.
5. Mostrar que total y pendientes aumentan.
6. Marcar la tarea nueva como completada y mostrar que cambian estilo y contadores.
7. Probar Pendientes y Completadas.
8. Eliminar la tarea creada.
9. Reducir el ancho del navegador para enseñar el diseño adaptable.
10. Si algo sale mal, recargar: las tareas de ejemplo vuelven al estado inicial.

## 15. Preguntas generales y respuestas breves

**¿Por qué React?**  
Porque permite dividir la interfaz en componentes y actualizar la pantalla de acuerdo con el estado sin manipular manualmente cada elemento del DOM.

**¿Vite es un framework?**  
No. Es una herramienta de desarrollo y construcción. El framework o biblioteca de interfaz utilizada es React.

**¿Dónde están los datos?**  
En memoria, dentro del estado `tareas` de `App`. Al recargar se reinician porque no hay backend ni almacenamiento persistente.

**¿Por qué no usan `push`?**  
Porque `push` modifica el array original. Con `[...tareas, nuevaTarea]` creamos uno nuevo y React detecta claramente el cambio.

**¿Qué diferencia hay entre props y estado?**  
El estado pertenece al componente y puede actualizarse con su setter. Las props llegan desde el padre y se tratan como datos de solo lectura.

**¿Qué provoca una nueva renderización?**  
Una actualización de estado con funciones como `setTareas`, `setFiltro` o `setNombre`.

**¿Por qué `id` es necesario?**  
Permite saber exactamente qué tarea completar o eliminar y ofrece una `key` estable a React.

**¿Qué mejorarían con más tiempo?**  
Persistencia con `localStorage` o una base de datos, edición de tareas, búsqueda, orden por fecha, inicio de sesión y pruebas automatizadas.

## 16. Problemas frecuentes

### `npm` no se reconoce

Node.js no está instalado o la terminal se abrió antes de instalarlo. Instalar Node.js y abrir una terminal nueva.

### La página está en blanco

Revisar la terminal y la consola del navegador. Las causas típicas son una ruta de importación incorrecta, una etiqueta JSX sin cerrar o un nombre de componente en minúscula.

### El puerto 5173 está ocupado

Vite normalmente elige otro puerto y lo muestra en la terminal. Abrir la URL exacta que indique.

### Se perdieron las tareas al recargar

Es el comportamiento esperado. El proyecto no usa persistencia; se reinicia con `tareasIniciales`.

### No se aplican los estilos

Comprobar que `main.jsx` contenga `import "./styles.css";` y que en JSX se use `className`.

## 17. Lista de comprobación para entregar

- [ ] `npm install` termina correctamente.
- [ ] `npm run dev` abre la página.
- [ ] Se puede agregar una tarea.
- [ ] Se puede completar y volver a dejar pendiente.
- [ ] Los tres filtros funcionan.
- [ ] Se puede eliminar.
- [ ] Los contadores coinciden con la lista.
- [ ] `npm run build` termina sin errores.
- [ ] Cada integrante sabe qué archivo explicará.
- [ ] La demostración se ensayó con datos preparados.

## 18. Resumen para recordar

`main.jsx` conecta React con HTML. `App.jsx` guarda el estado compartido y la lógica. Los componentes reciben datos y funciones por props. El formulario genera información, `map` transforma y actualiza listas, `filter` selecciona o elimina, el spread operator crea copias y CSS presenta todo de forma limpia y adaptable.

Para el reparto completo, el texto sugerido y las preguntas individuales, consultar `GUIA_EXPOSICION.md`.
