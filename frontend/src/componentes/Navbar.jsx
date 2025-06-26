import { Link } from "react-router-dom"

import { useState } from "react"

export function Navbar() {
    const [toggle,setToggle] =useState(false)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center">
                        {/* Logo */}
                        <div className="d-flex align-items-center">
                            <svg className="text-warning me-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            <span className="h4 fw-bold text-dark mb-0">ZIARA</span>
                        </div>

                        {/* Navigation Links - Desktop */}
                        <div className="d-none d-sm-flex ms-4">
                            <Link to='/' className="nav-link text-dark fw-medium border-bottom border-warning px-3 py-2">
                                Inicio
                            </Link>
                            <a href="#" className="nav-link text-muted fw-medium px-3 py-2">
                                Servicios
                            </a>
                            <a href="#" className="nav-link text-muted fw-medium px-3 py-2">
                                Reservas
                            </a>
                            <a href="#" className="nav-link text-muted fw-medium px-3 py-2">
                                Contacto
                            </a>
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="d-none d-sm-flex align-items-center gap-3">
                        <Link to='/login' className="btn btn-link text-muted text-decoration-none fw-medium px-3 py-2">
                            Iniciar Sesión
                        </Link>
                        <button className="btn btn-warning text-white fw-medium px-4 py-2">
                            Reservar Cita
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="d-sm-none">
                        <button onClick={()=>setToggle(!toggle)} type="button" className="btn btn-link text-muted p-2">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div className={` ${toggle ? 'd-block':'d-none'} d-sm-none `}>
                <div className="container py-2">
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action bg-warning bg-opacity-10 text-warning border-start border-warning border-4">
                            Inicio
                        </a>
                        <a href="#" className="list-group-item list-group-item-action text-muted">
                            Servicios
                        </a>
                        <a href="#" className="list-group-item list-group-item-action text-muted">
                            Reservas
                        </a>
                        <a href="#" className="list-group-item list-group-item-action text-muted">
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
} 