import { useState } from "react"
export function ListarPersonal({barberos,clientes}) {
    const [tab,setTab] =useState(0)
    const [activo,setActivo] = useState(false)
    return (
        <div className="card shadow-lg">
            <div className="card-body">
                <div className="mb-4">
                        <h1 className="h2 fw-bold text-dark">Gestión de Personal</h1>
                        <p className="mt-2 text-muted">Administra los empleados y clientes de tu barbería</p>
                </div>
                {/* Tabs */}
                <div className="mb-4 border-bottom">
                    <nav className="nav nav-tabs border-0">
                        <button onClick={()=>setTab(0)} className={`nav-link border-0 text-muted fw-medium small ${tab === 0 ? 'active text-primary border-bottom border-primary' : 'hover:text-dark'}`}>
                            Barberos
                        </button>
                        <button onClick={()=>setTab(1) }  className={`nav-link border-0 text-muted fw-medium small ${tab === 1 ? 'active text-primary border-bottom border-primary' : 'hover:text-dark'}`}>
                            Clientes
                        </button>
                        <button onClick={()=>setTab(2) }  className={`nav-link border-0 text-muted fw-medium small ${tab === 2 ? 'active text-primary border-bottom border-primary' : 'hover:text-dark'}`}>
                            Administradores
                        </button>
                    </nav>
                </div>

                <div className="mb-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <button onClick={()=>setActivo(true)}  className="btn btn-primary me-3">
                                Registrar Cuenta
                            </button>
                        </div>
                        <div className="position-relative">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="form-control ps-5 pe-4 py-2 border-secondary focus-ring focus-ring-primary"
                            />
                            <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <svg className="text-muted" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div className={`modal fade ${activo ? 'show d-block' : ''}`} style={{backgroundColor: 'rgba(0,0,0,0.5)'}} tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h5 className="fw-medium text-dark mb-3">Nueva Cuenta</h5>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Email</label>
                                            <input
                                                type="email"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder="Ej: barbero@gmail.com"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder=" ******* "
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Duración (minutos)</label>
                                            <input
                                                type="number"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder="30"
                                            />
                                        </div>

                                        <div className="d-flex justify-content-end gap-2 mt-4">
                                            <button onClick={()=>setActivo(false)}
                                                type="button"
                                                className="btn btn-secondary"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Guardar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>




                {/* Barberos */}

                <div className="table-responsive">
                    {tab === 0 && (
                        <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Barbero
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Última Visita
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {barberos.map((barbero)=>(
                                <tr key={barbero.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{width: '32px', height: '32px'}}>
                                            <span className="text-muted fw-medium small">Jjsjjs</span>
                                        </div>
                                        <div>
                                            <p className="small fw-medium text-dark mb-0">{barbero.usuario.first_name}</p>
                                            <p className="small text-muted mb-0"> {barbero.usuario.email} </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="small text-muted"> {barbero.usuario.last_login?.slice(0, 10)} </td>
                                <td className="small">
                                    <button className="btn btn-link btn-sm text-primary p-0 me-2">
                                        Ver
                                    </button>
                                    <button className="btn btn-link btn-sm text-danger p-0">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    )}



                    {tab === 1 && (
                        <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Cliente
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Última Visita
                                </th>
                                <th className="border-0 text-muted small text-uppercase fw-medium">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente)=>(
                                <tr key={cliente.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{width: '32px', height: '32px'}}>
                                            <span className="text-muted fw-medium small">Jjsjjs</span>
                                        </div>
                                        <div>
                                            <p className="small fw-medium text-dark mb-0">{cliente.usuario.first_name}</p>
                                            <p className="small text-muted mb-0"> {cliente.usuario.email} </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="small text-muted"> {cliente.usuario.last_login?.slice(0, 10)} </td>
                                <td className="small">
                                    <button className="btn btn-link btn-sm text-primary p-0 me-2">
                                        Ver
                                    </button>
                                    <button className="btn btn-link btn-sm text-danger p-0">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    )}
                </div>
            </div>
        </div>
    )
} 