function Aside() {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src="/src/assets/images/logo.png" alt="" />
          <h2>
            FERREY<span className="danger">AL</span>
          </h2>
        </div>
        <div className="close">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className="sidebar">
        <a href="#">
          <span className="material-icons-sharp">grid_view</span>
          <h3>Dashboard</h3>
        </a>
        <a href="#" className="active">
          <span className="material-icons-sharp">person_outline</span>
          <h3>Clientes</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">receipt_long</span>
          <h3>Pedidos</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">insights</span>
          <h3>Análisis</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Mensajes</h3>
          <span className="message-count">26</span>
        </a>
        <a href="#">
          <span className="material-icons-sharp">inventory</span>
          <h3>Productos</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reportes</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">settings</span>
          <h3>Configuración</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">add</span>
          <h3>Agregar Productos</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Cerrar Sesion</h3>
        </a>
      </div>
    </aside>
  );
}

export default Aside;
