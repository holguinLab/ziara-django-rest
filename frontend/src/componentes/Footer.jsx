export function Footer() {
    return (
        <footer className="bg-dark">
            <div className="container py-5">
                <div className="row g-4">
                    {/* About section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="mb-4">
                            <div className="d-flex align-items-center">
                                <svg className="text-warning me-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                <span className="h4 fw-bold text-white mb-0">ZIARA</span>
                            </div>
                            <p className="text-muted small mt-3">
                                Expertos en el arte del cuidado masculino. Ofrecemos servicios de barbería de primera calidad con un toque de elegancia moderna.
                            </p>
                        </div>
                    </div>

                    {/* Services section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h5 className="text-white fw-semibold mb-3">Servicios</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none small">Corte de Cabello</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none small">Afeitado Clásico</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none small">Arreglo de Barba</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none small">Tratamientos Capilares</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h5 className="text-white fw-semibold mb-3">Contacto</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center text-muted small mb-2">
                                <svg className="me-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Calle Principal 123
                            </li>
                            <li className="d-flex align-items-center text-muted small mb-2">
                                <svg className="me-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +34 123 456 789
                            </li>
                            <li className="d-flex align-items-center text-muted small mb-2">
                                <svg className="me-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@barberstyle.com
                            </li>
                        </ul>
                    </div>

                    {/* Hours section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h5 className="text-white fw-semibold mb-3">Horario</h5>
                        <ul className="list-unstyled">
                            <li className="text-muted small mb-2">Lunes - Viernes: 9:00 - 20:00</li>
                            <li className="text-muted small mb-2">Sábado: 9:00 - 18:00</li>
                            <li className="text-muted small mb-2">Domingo: Cerrado</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media and Copyright */}
                <div className="mt-4 pt-4 border-top border-secondary">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <p className="text-muted small mb-0">
                            © 2024 BarberStyle. Todos los derechos reservados.
                        </p>
                        <div className="d-flex gap-4">
                            <a href="#" className="text-muted text-decoration-none">
                                <span className="visually-hidden">Facebook</span>
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-muted text-decoration-none">
                                <span className="visually-hidden">Instagram</span>
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 