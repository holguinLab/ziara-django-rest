import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="z-1 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            <span className="ml-2 text-xl font-bold text-gray-900">ZIARA</span>
                        </div>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to='/' className="border-amber-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Inicio
                            </Link>
                            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Servicios
                            </a>
                            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Reservas
                            </a>
                            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Contacto
                            </a>
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                        <Link to='/login' className=" text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            Iniciar Sesión
                        </Link>
                        <button className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors">
                            Reservar Cita
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div className="sm:hidden hidden">
                <div className="pt-2 pb-3 space-y-1">
                    <a href="#" className="bg-amber-50 border-amber-500 text-amber-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Inicio
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Servicios
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Reservas
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Contacto
                    </a>
                </div>
            </div>
        </nav>
    )
}