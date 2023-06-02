function Right() {
  return (
    <div className="right">
      {/* <!-- INICIO DE TOP  --> */}
      <div className="top">
        <button>
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className="theme-toggler">
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              Hola, <b>Alexis</b>
            </p>
            <small className="text-muted">Administrador</small>
          </div>
          <div className="profile-photo">
            <img src="./images/profile-1.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* <!-- FIN DE TOP  --> */}

      {/* <!-- INICIO DE ACTUALIZACIONES RECIENTES --> */}
      <div className="recent-updates">
        <h2>Actualizaciones Recientes</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src="./images/profile-2.jpg" alt="" />
            </div>
            <div className="message">
              <p>
                <b>Fernando Gay</b> cambio de genero a chivito pasivo
              </p>
              <small className="text-muted">Hace 2 minutos</small>
            </div>
          </div>

          <div className="update">
            <div className="profile-photo">
              <img src="./images/profile-3.jpg" alt="" />
            </div>
            <div className="message">
              <p>
                <b>Fernando Gay</b> cambio de genero a chivito pasivo
              </p>
              <small className="text-muted">Hace 2 minutos</small>
            </div>
          </div>

          <div className="update">
            <div className="profile-photo">
              <img src="./images/profile-4.jpg" alt="" />
            </div>
            <div className="message">
              <p>
                <b>Fernando Gay</b> cambio de genero a chivito pasivo
              </p>
              <small className="text-muted">Hace 2 minutos</small>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FIN DE ACTUALIZACIONES RECIENTES --> */}

      {/* <!----------------- INICIO ANALISIS DE VENTAS ------------- --> */}
      <div className="sales-analytics">
        <h2>Analisis de ventas</h2>

        <div className="item online">
          <div className="icon">
            <span className="material-icons-sharp">shopping_cart</span>
          </div>

          <div className="right">
            <div className="info">
              <h3>Pedidos en línea</h3>
              <small className="text-muted">Hace 22 horas</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>3849</h3>
          </div>
        </div>

        <div className="item offline">
          <div className="icon">
            <span className="material-icons-sharp">local_mall</span>
          </div>

          <div className="right">
            <div className="info">
              <h3>Pedidos</h3>
              <small className="text-muted">Hace 22 horas</small>
            </div>
            <h5 className="danger">+17%</h5>
            <h3>1100</h3>
          </div>
        </div>

        <div className="item customers">
          <div className="icon">
            <span className="material-icons-sharp">person</span>
          </div>

          <div className="right">
            <div className="info">
              <h3>Nuevo cliente</h3>
              <small className="text-muted">Hace 22 horas</small>
            </div>
            <h5 className="danger">+25%</h5>
            <h3>700</h3>
          </div>
        </div>

        <div className="item add-product">
          <div>
            <span className="material-icons-sharp">add</span>
            <h3>Agregar Producto</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
