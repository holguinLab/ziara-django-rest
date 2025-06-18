export function Dashboard({clientes,barberos}) {
    return (
        <>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h2 fw-bold text-dark">
                        Panel de Administración
                    </h1>
                    <p className="text-muted">Gestión general del negocio</p>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-light rounded-circle p-2 me-3">
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                    <button className="btn btn-link p-0">
                        <img
                            className="rounded-circle"
                            width="40"
                            height="40"
                            src=" https://ifxqightozunauqcnpzm.supabase.co/storage/v1/object/public/avatares/1c01ef8ed9221c6d79f300472be12035.jpg?"
                            alt="Admin"
                        />
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="row g-3 mb-4">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="text-muted small">Ingresos Mensuales</h6>
                                <span className="badge bg-success-subtle text-success small">
                                    +15%
                                </span>
                            </div>
                            <p className="h2 fw-bold text-dark mb-2">€8,540</p>
                            <div className="d-flex align-items-center text-muted small">
                                <svg
                                    className="text-success me-1"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                                <span>€1,200 más que el mes pasado</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="text-muted small">Total Empleados</h6>
                                <span className="badge bg-success-subtle text-success small">
                                    
                                </span>
                            </div>
                            <p className="h2 fw-bold text-dark mb-2">{barberos.length}</p>
                            <div className="d-flex align-items-center text-muted small">
                                <div className="d-flex">
                                    <img
                                        className="rounded-circle border border-white"
                                        width="24"
                                        height="24"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                                        alt=""
                                        style={{marginRight: '-8px'}}
                                    />
                                    <img
                                        className="rounded-circle border border-white"
                                        width="24"
                                        height="24"
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
                                        alt=""
                                        style={{marginRight: '-8px'}}
                                    />
                                    <img
                                        className="rounded-circle border border-white"
                                        width="24"
                                        height="24"
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="text-muted small">Clientes Totales</h6>
                                <span className="badge bg-success-subtle text-success small">
                                    
                                </span>
                            </div>
                            <p className="h2 fw-bold text-dark mb-2">{clientes.length}</p>
                            <div className="d-flex align-items-center text-muted small">
                                <svg
                                    className="text-success me-1"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                </svg>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="text-muted small">Satisfacción</h6>
                                <span className="badge bg-success-subtle text-success small">
                                    98%
                                </span>
                            </div>
                            <p className="h2 fw-bold text-dark mb-2">4.9/5</p>
                            <div className="d-flex align-items-center text-muted small">
                                <div className="d-flex text-warning">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Staff Management */}
            <div className="card shadow-sm mb-4">
                <div className="card-header bg-transparent border-bottom">
                    <h5 className="fw-semibold text-dark mb-0">
                        Gestión de Personal
                    </h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Empleado
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Cargo
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Citas Hoy
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Rendimiento
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Estado
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-3"
                                            width="40"
                                            height="40"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                                            alt=""
                                        />
                                        <div>
                                            <div className="fw-medium text-dark">
                                                Juan Pérez
                                            </div>
                                            <div className="text-muted small">
                                                juan@barberstyle.com
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-dark">Barbero Senior</div>
                                </td>
                                <td>
                                    <div className="text-dark">8 citas</div>
                                </td>
                                <td>
                                    <div className="progress mb-1" style={{height: '8px'}}>
                                        <div
                                            className="progress-bar bg-warning"
                                            style={{ width: "95%" }}
                                        ></div>
                                    </div>
                                    <span className="text-muted small">95%</span>
                                </td>
                                <td>
                                    <span className="badge bg-success-subtle text-success small">
                                        Activo
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-link btn-sm text-warning p-0 me-2">
                                        Editar
                                    </button>
                                    <button className="btn btn-link btn-sm text-danger p-0">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                            {/* Más filas de empleados aquí */}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Activity */}
           {/*  <div className="card shadow-sm">
                <div className="card-header bg-transparent border-bottom">
                    <h5 className="fw-semibold text-dark mb-0">
                        Actividad Reciente
                    </h5>
                </div>
                <div className="card-body">
                    <div className="flow-root">
                        <ul className="list-unstyled">
                            <li>
                                <div className="position-relative pb-4">
                                    <span
                                        className="position-absolute top-0 start-0 h-100 w-1 bg-light"
                                        aria-hidden="true"
                                    ></span>
                                    <div className="d-flex">
                                        <div>
                                            <span className="rounded-circle bg-success d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                                                <svg
                                                    className="text-white"
                                                    width="20"
                                                    height="20"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill pt-1 ms-3 d-flex justify-content-between">
                                            <div>
                                                <p className="text-muted small mb-0">
                                                    Nuevo empleado{" "}
                                                    <span className="fw-medium text-dark">
                                                        Ana García
                                                    </span>{" "}
                                                    registrada
                                                </p>
                                            </div>
                                            <div className="text-end text-muted small">
                                                <time dateTime="2024-01-23">Hace 2h</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="position-relative pb-4">
                                    <span
                                        className="position-absolute top-0 start-0 h-100 w-1 bg-light"
                                        aria-hidden="true"
                                    ></span>
                                    <div className="d-flex">
                                        <div>
                                            <span className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                                                <svg
                                                    className="text-white"
                                                    width="20"
                                                    height="20"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill pt-1 ms-3 d-flex justify-content-between">
                                            <div>
                                                <p className="text-muted small mb-0">
                                                    Actualización de precios en servicios
                                                </p>
                                            </div>
                                            <div className="text-end text-muted small">
                                                <time dateTime="2024-01-23">Hace 6h</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    );
} 