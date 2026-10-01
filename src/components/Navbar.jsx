function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__contenido" aria-label="Navegación principal">
        <a className="logo" href="#inicio">
          <span className="logo__icono">S</span>
          <span>StudyTask</span>
        </a>

        <a className="navbar__enlace" href="#tareas">
          Mis tareas
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
