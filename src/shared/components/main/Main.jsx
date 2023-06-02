function Main() {
  return (
    <main>
      <h1>Dashboard</h1>

      <div className="date">
        <input type="date" />
      </div>

      {/* <!-- INICIO DE INSIGHTS  --> */}
      <div className="insights">
        {/* <!-- INICIO DE VENTAS --> */}
        <div className="sales">
          <span className="material-icons-sharp">analytics</span>
          <div className="middle">
            <div className="left">
              <h3>Total Ventas</h3>
              <h1>S/25,000</h1>
            </div>

            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Hace 24 horas</small>
        </div>
        {/* <!-- FIN DE VENTAS  --> */}

        {/* <!-- INICIO GASTOS --> */}
        <div className="expenses">
          <span className="material-icons-sharp">bar_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total Gastos</h3>
              <h1>S/14,000</h1>
            </div>

            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Hace 24 horas</small>
        </div>
        {/* <!-- FIN GASTOS  --> */}

        {/* <!-- INICIO DE INGRESOS --> */}
        <div className="income">
          <span className="material-icons-sharp">stacked_line_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total de Ingresos</h3>
              <h1>S/10,000</h1>
            </div>

            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Hace 24 horas</small>
        </div>
        {/* <!-- FIN DE INGRESOS  --> */}
      </div>
      {/* <!-- FIN DE INSIGHTS  --> */}

      {/* <!-- INICIO DE ORDENES RECIENTES  --> */}
      <div className="recent-orders">
        <h2>Ordenes Recientes</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre del Producto</th>
              <th>Cantidad del Producto</th>
              <th>Pago</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Media 3/4</td>
              <td>2</td>
              <td>Pagado</td>
              <td className="warning">Enviado</td>
              <td className="primary">Detalles</td>
            </tr>
            <tr>
              <td>Media 3/4</td>
              <td>2</td>
              <td>Pagado</td>
              <td className="warning">Enviado</td>
              <td className="primary">Detalles</td>
            </tr>
            <tr>
              <td>Media 3/4</td>
              <td>2</td>
              <td>Pagado</td>
              <td className="warning">Enviado</td>
              <td className="primary">Detalles</td>
            </tr>
            <tr>
              <td>Media 3/4</td>
              <td>2</td>
              <td>Pagado</td>
              <td className="warning">Enviado</td>
              <td className="primary">Detalles</td>
            </tr>
            <tr>
              <td>Media 3/4</td>
              <td>2</td>
              <td>Pagado</td>
              <td className="warning">Enviado</td>
              <td className="primary">Detalles</td>
            </tr>
            <tr>
              <td>Media 3/4</td>
              <td>2</td>
              <td>Pagado</td>
              <td className="warning">Enviado</td>
              <td className="primary">Detalles</td>
            </tr>
            <tr>
              <td>Media 3/4</td>
              <td>2</td>
              <td>Pagado</td>
              <td className="warning">Enviado</td>
              <td className="primary">Detalles</td>
            </tr>
          </tbody>
        </table>
        <a href="#">Mostrar todo</a>
      </div>
      {/* <!-- FIN DE ORDENES RECIENTES  --> */}
    </main>
  );
}

export default Main;
