export function BarberPanel() {
    return (
        <div className="min-vh-100 bg-light">
            {/* Sidebar */}
            <aside className="position-fixed top-0 start-0 h-100 bg-dark text-white" style={{width: '16rem', zIndex: 1050}}>
                <div className="p-3">
                    <div className="d-flex align-items-center">
                        <svg className="text-warning me-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
                        </svg>
                        <span className="h4 fw-bold mb-0">BarberStyle</span>
                    </div>
                    <span className="text-muted small mt-1 d-block">Panel del Barbero</span>
                </div>

                <nav className="mt-4">
                    <div className="px-3">
                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-secondary text-white text-decoration-none rounded">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Mis Citas
                        </a>
                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-light text-decoration-none rounded">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Mis Clientes
                        </a>
                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-light text-decoration-none rounded">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Mi Rendimiento
                        </a>
                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-light text-decoration-none rounded">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Mi Perfil
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ms-auto p-4" style={{marginLeft: '16rem'}}>
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="h2 fw-bold text-dark">Buenos días, Juan</h1>
                        <p className="text-muted">Martes, 23 de Enero 2024</p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-light rounded-circle p-2">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="btn btn-link p-0">
                            <img className="rounded-circle" width="32" height="32" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="Barber" />
                        </button>
                    </div>
                </div>

                {/* Today's Summary */}
                <div className="row g-3 mb-4">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="text-muted small">Citas Hoy</h6>
                                    <span className="badge bg-warning-subtle text-warning small">8 citas</span>
                                </div>
                                <div className="mt-2">
                                    <div className="d-flex align-items-center">
                                        <div className="progress flex-fill me-2" style={{height: '8px'}}>
                                            <div className="progress-bar bg-warning" style={{ width: '60%' }}></div>
                                        </div>
                                        <span className="small text-muted">5/8</span>
                                    </div>
                                    <p className="mt-2 small text-muted">Próxima cita en 30 min</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="text-muted small">Clientes Atendidos</h6>
                                    <span className="badge bg-success-subtle text-success small">Hoy</span>
                                </div>
                                <p className="h2 fw-bold text-dark mb-2">5</p>
                                <div className="d-flex align-items-center text-muted small">
                                    <div className="d-flex">
                                        <img className="rounded-circle border border-white" width="24" height="24" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="" style={{marginRight: '-8px'}} />
                                        <img className="rounded-circle border border-white" width="24" height="24" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" style={{marginRight: '-8px'}} />
                                        <img className="rounded-circle border border-white" width="24" height="24" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="text-muted small">Valoración Media</h6>
                                    <span className="badge bg-success-subtle text-success small">Excelente</span>
                                </div>
                                <p className="h2 fw-bold text-dark mb-2">4.9</p>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex text-warning">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="text-muted small">Tiempo Promedio</h6>
                                    <span className="badge bg-warning-subtle text-warning small">Por servicio</span>
                                </div>
                                <p className="h2 fw-bold text-dark mb-2">35min</p>
                                <p className="mt-3 small text-muted">Dentro del tiempo estimado</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Appointments */}
                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-transparent border-bottom">
                        <h5 className="fw-semibold text-dark mb-0">Próximas Citas</h5>
                    </div>
                    <div className="card-body">
                        <div>
                            {/* Current/Next Appointment */}
                            <div className="bg-warning bg-opacity-10 border border-warning rounded p-3 mb-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-warning rounded-circle p-2">
                                            <svg className="text-white" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h6 className="small fw-medium text-dark mb-0">En curso - Carlos Martínez</h6>
                                            <p className="small text-muted mb-0">Corte de Cabello y Barba</p>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <p className="small fw-medium text-dark mb-0">10:00 AM</p>
                                        <p className="small text-muted mb-0">30 min</p>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Appointments */}
                            <div className="border-start border-4 border-light ps-3 mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <img className="rounded-circle" width="40" height="40" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="" />
                                        <div>
                                            <h6 className="small fw-medium text-dark mb-0">Miguel López</h6>
                                            <p className="small text-muted mb-0">Afeitado Clásico</p>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <p className="small fw-medium text-dark mb-0">11:00 AM</p>
                                        <p className="small text-muted mb-0">45 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-start border-4 border-light ps-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <img className="rounded-circle" width="40" height="40" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" />
                                        <div>
                                            <h6 className="small fw-medium text-dark mb-0">David García</h6>
                                            <p className="small text-muted mb-0">Corte de Cabello</p>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <p className="small fw-medium text-dark mb-0">12:00 PM</p>
                                        <p className="small text-muted mb-0">30 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-bottom">
                        <h5 className="fw-semibold text-dark mb-0">Últimas Valoraciones</h5>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className="d-flex align-items-start mb-4">
                                <img className="rounded-circle me-3" width="40" height="40" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" />
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <h6 className="small fw-medium text-dark mb-0">Carlos Martínez</h6>
                                        <span className="ms-2 small text-muted">hace 2 horas</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-1">
                                        <div className="d-flex text-warning">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-2 small text-muted">
                                        "Excelente servicio, muy profesional y atento a los detalles. Definitivamente volveré."
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start">
                                <img className="rounded-circle me-3" width="40" height="40" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="" />
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <h6 className="small fw-medium text-dark mb-0">Miguel López</h6>
                                        <span className="ms-2 small text-muted">hace 1 día</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-1">
                                        <div className="d-flex text-warning">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-2 small text-muted">
                                        "Gran trabajo con mi barba, justo lo que estaba buscando. El ambiente es muy agradable."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
} 