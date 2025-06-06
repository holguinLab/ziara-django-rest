export function BarberPanel() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="absolute  inset-y-0 left-0 w-64 bg-gray-900 text-white">
                <div className="p-4">
                    <div className="flex items-center space-x-2">
                        <svg className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
                        </svg>
                        <span className="text-xl font-bold">BarberStyle</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">Panel del Barbero</span>
                </div>

                <nav className="mt-8">
                    <div className="px-4 space-y-1">
                        <a href="#" className="flex items-center px-4 py-3 text-sm bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Mis Citas
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Mis Clientes
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Mi Rendimiento
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Mi Perfil
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Buenos días, Juan</h1>
                        <p className="text-gray-600">Martes, 23 de Enero 2024</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-white p-2 rounded-full text-gray-600 hover:text-gray-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="flex items-center space-x-2">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="Barber" />
                        </button>
                    </div>
                </div>

                {/* Today's Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Citas Hoy</h3>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">8 citas</span>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                                <span className="ml-2 text-sm text-gray-600">5/8</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">Próxima cita en 30 min</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Clientes Atendidos</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Hoy</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
                        <div className="flex items-center mt-4 text-sm text-gray-600">
                            <div className="flex -space-x-2">
                                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="" />
                                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" />
                                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Valoración Media</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Excelente</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mt-2">4.9</p>
                        <div className="flex items-center mt-4">
                            <div className="flex text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Tiempo Promedio</h3>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Por servicio</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mt-2">35min</p>
                        <p className="mt-4 text-sm text-gray-600">Dentro del tiempo estimado</p>
                    </div>
                </div>

                {/* Next Appointments */}
                <div className="bg-white rounded-lg shadow mb-8">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Próximas Citas</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            {/* Current/Next Appointment */}
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-amber-500 rounded-full p-2">
                                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">En curso - Carlos Martínez</h3>
                                            <p className="text-sm text-gray-500">Corte de Cabello y Barba</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">10:00 AM</p>
                                        <p className="text-sm text-gray-500">30 min</p>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Appointments */}
                            <div className="border-l-4 border-gray-200 pl-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="" />
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">Miguel López</h3>
                                            <p className="text-sm text-gray-500">Afeitado Clásico</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">11:00 AM</p>
                                        <p className="text-sm text-gray-500">45 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-gray-200 pl-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" />
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">David García</h3>
                                            <p className="text-sm text-gray-500">Corte de Cabello</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">12:00 PM</p>
                                        <p className="text-sm text-gray-500">30 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Últimas Valoraciones</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" />
                                <div className="ml-4">
                                    <div className="flex items-center">
                                        <h3 className="text-sm font-medium text-gray-900">Carlos Martínez</h3>
                                        <span className="ml-2 text-sm text-gray-500">hace 2 horas</span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <div className="flex text-amber-500">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">
                                        "Excelente servicio, muy profesional y atento a los detalles. Definitivamente volveré."
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="" />
                                <div className="ml-4">
                                    <div className="flex items-center">
                                        <h3 className="text-sm font-medium text-gray-900">Miguel López</h3>
                                        <span className="ml-2 text-sm text-gray-500">hace 1 día</span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <div className="flex text-amber-500">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">
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