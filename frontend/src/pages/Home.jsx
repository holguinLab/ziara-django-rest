export function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="position-relative" style={{height: '90vh'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100">
                    <img
                        src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3"
                        alt="Barbería moderna"
                        className="w-100 h-100 object-fit-cover"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75" />
                </div>
                <div className="position-relative container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="display-3 display-md-1 fw-bold text-white mb-4">
                                Estilo y Tradición<br />para el Hombre Moderno
                            </h1>
                            <p className="mt-4 fs-5 text-light">
                                Expertos en el arte del cuidado masculino. Más de 10 años creando looks únicos y memorables.
                            </p>
                            <div className="mt-5 d-flex gap-3 justify-content-center flex-wrap">
                                <a
                                    href="#"
                                    className="btn btn-warning btn-lg fw-semibold px-4 py-3"
                                >
                                    Reservar Cita
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-outline-light btn-lg fw-semibold px-4 py-3"
                                >
                                    Ver Servicios
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="text-center">
                        <h2 className="h1 fw-bold text-dark">
                            Nuestros Servicios
                        </h2>
                        <p className="mt-3 fs-5 text-muted">
                            Descubre nuestra amplia gama de servicios profesionales
                        </p>
                    </div>

                    <div className="mt-5 row g-4">
                        {/* Service Card 1 */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card shadow-lg h-100 overflow-hidden">
                                <div className="position-relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3"
                                        alt="Corte de cabello"
                                        className="card-img-top"
                                        style={{height: '16rem', objectFit: 'cover'}}
                                    />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75" />
                                    <div className="position-absolute bottom-0 start-0 p-4">
                                        <h3 className="h5 fw-semibold text-white">Corte de Cabello</h3>
                                        <p className="mt-2 small text-light">Desde €25</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card shadow-lg h-100 overflow-hidden">
                                <div className="position-relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3"
                                        alt="Afeitado clásico"
                                        className="card-img-top"
                                        style={{height: '16rem', objectFit: 'cover'}}
                                    />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75" />
                                    <div className="position-absolute bottom-0 start-0 p-4">
                                        <h3 className="h5 fw-semibold text-white">Afeitado Clásico</h3>
                                        <p className="mt-2 small text-light">Desde €30</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card shadow-lg h-100 overflow-hidden">
                                <div className="position-relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3"
                                        alt="Arreglo de barba"
                                        className="card-img-top"
                                        style={{height: '16rem', objectFit: 'cover'}}
                                    />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75" />
                                    <div className="position-absolute bottom-0 start-0 p-4">
                                        <h3 className="h5 fw-semibold text-white">Arreglo de Barba</h3>
                                        <p className="mt-2 small text-light">Desde €20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-5 bg-white">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h2 className="h1 fw-bold text-dark">
                                ¿Por qué elegirnos?
                            </h2>
                            <p className="mt-3 fs-5 text-muted">
                                En BarberStyle nos dedicamos a ofrecer la mejor experiencia en cuidado personal masculino.
                            </p>
                            <div className="mt-4">
                                <div className="d-flex gap-3 mb-4">
                                    <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded bg-warning" style={{width: '40px', height: '40px'}}>
                                        <svg className="text-white" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-semibold text-dark">Barberos Expertos</h3>
                                        <p className="mt-2 text-muted">Nuestro equipo cuenta con años de experiencia y formación continua.</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 mb-4">
                                    <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded bg-warning" style={{width: '40px', height: '40px'}}>
                                        <svg className="text-white" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-semibold text-dark">Productos Premium</h3>
                                        <p className="mt-2 text-muted">Utilizamos solo los mejores productos para el cuidado de tu cabello y barba.</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                    <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded bg-warning" style={{width: '40px', height: '40px'}}>
                                        <svg className="text-white" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-semibold text-dark">Ambiente Exclusivo</h3>
                                        <p className="mt-2 text-muted">Un espacio diseñado para tu comodidad y relajación.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3"
                                alt="Interior de la barbería"
                                className="rounded-3 shadow-lg w-100 h-100 object-fit-cover"
                                style={{minHeight: '400px'}}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="text-center">
                        <h2 className="h1 fw-bold text-dark">
                            Lo que dicen nuestros clientes
                        </h2>
                        <p className="mt-3 fs-5 text-muted">
                            Descubre por qué somos la barbería preferida en la ciudad
                        </p>
                    </div>
                    <div className="mt-5 row g-4">
                        {/* Testimonial 1 */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card shadow-lg h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                                            alt="Cliente"
                                            className="rounded-circle"
                                            width="48"
                                            height="48"
                                            style={{objectFit: 'cover'}}
                                        />
                                        <div>
                                            <h3 className="h6 fw-semibold text-dark mb-0">Carlos R.</h3>
                                            <p className="small text-muted mb-0">Cliente desde 2020</p>
                                        </div>
                                    </div>
                                    <p className="text-muted">
                                        "El mejor servicio que he recibido. Los barberos son verdaderos profesionales y el ambiente es inmejorable."
                                    </p>
                                    <div className="mt-3 d-flex text-warning">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card shadow-lg h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
                                            alt="Cliente"
                                            className="rounded-circle"
                                            width="48"
                                            height="48"
                                            style={{objectFit: 'cover'}}
                                        />
                                        <div>
                                            <h3 className="h6 fw-semibold text-dark mb-0">Miguel A.</h3>
                                            <p className="small text-muted mb-0">Cliente desde 2021</p>
                                        </div>
                                    </div>
                                    <p className="text-muted">
                                        "Excelente atención y resultados. Siempre salgo satisfecho con mi corte y el trato es excepcional."
                                    </p>
                                    <div className="mt-3 d-flex text-warning">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card shadow-lg h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
                                            alt="Cliente"
                                            className="rounded-circle"
                                            width="48"
                                            height="48"
                                            style={{objectFit: 'cover'}}
                                        />
                                        <div>
                                            <h3 className="h6 fw-semibold text-dark mb-0">David L.</h3>
                                            <p className="small text-muted mb-0">Cliente desde 2019</p>
                                        </div>
                                    </div>
                                    <p className="text-muted">
                                        "Los mejores profesionales de la ciudad. El ambiente es muy agradable y los resultados son siempre perfectos."
                                    </p>
                                    <div className="mt-3 d-flex text-warning">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="position-relative bg-dark">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="h1 fw-bold text-white">
                                ¿Listo para renovar tu imagen?
                            </h2>
                            <p className="mt-3 fs-5 text-light">
                                Reserva tu cita ahora y déjanos crear el look que siempre has deseado
                            </p>
                            <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap">
                                <a
                                    href="#"
                                    className="btn btn-warning btn-lg fw-semibold px-4 py-3"
                                >
                                    Reservar Ahora
                                </a>
                                <a href="#" className="btn btn-link btn-lg fw-semibold text-white text-decoration-none">
                                    Ver Precios <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="position-absolute top-0 start-50 translate-middle-x w-100 h-100 opacity-25"
                    style={{
                        background: 'linear-gradient(45deg, #ffc107, #fd7e14)',
                        filter: 'blur(100px)',
                        zIndex: -1
                    }}
                />
            </div>
        </div>
    )
} 