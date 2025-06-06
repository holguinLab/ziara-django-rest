export function AdminPanel() {
    return (
        <div className="min-h-screen  flex flex-col bg-gray-100">
            {/* Sidebar */}
            <aside className=" absolute h-full w-64 bg-gray-900 text-white z-50">
                <div className="p-4">
                    <div className="flex items-center space-x-2">
                        <svg className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
                        </svg>
                        <span className="text-xl font-bold">BarberStyle</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">Panel de Administración</span>
                </div>

                <nav className="mt-8">
                    <div className="px-4 space-y-1">
                        <a href="#" className="flex items-center px-4 py-3 text-sm bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Gestión de Personal
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Finanzas
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Servicios y Precios
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Reportes
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg">
                            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Configuración
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
                        <p className="text-gray-600">Gestión general del negocio</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-white p-2 rounded-full text-gray-600 hover:text-gray-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="flex items-center space-x-2">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="Admin" />
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Ingresos Mensuales</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">+15%</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mt-2">€8,540</p>
                        <div className="flex items-center mt-4 text-sm text-gray-600">
                            <svg className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span>€1,200 más que el mes pasado</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Total Empleados</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">+2</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
                        <div className="flex items-center mt-4 text-sm text-gray-600">
                            <div className="flex -space-x-2">
                                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" />
                                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="" />
                                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Clientes Totales</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">+25%</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mt-2">1,240</p>
                        <div className="flex items-center mt-4 text-sm text-gray-600">
                            <svg className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span>248 nuevos este mes</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500 text-sm">Satisfacción</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">98%</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mt-2">4.9/5</p>
                        <div className="flex items-center mt-4 text-sm text-gray-600">
                            <div className="flex text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Staff Management */}
                <div className="bg-white rounded-lg shadow mb-8">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Gestión de Personal</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empleado</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Citas Hoy</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rendimiento</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="" />
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Juan Pérez</div>
                                                <div className="text-sm text-gray-500">juan@barberstyle.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Barbero Senior</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">8 citas</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                        <span className="text-sm text-gray-600">95%</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Activo
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button className="text-amber-600 hover:text-amber-900 mr-3">Editar</button>
                                        <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                    </td>
                                </tr>
                                {/* Más filas de empleados aquí */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Actividad Reciente</h2>
                    </div>
                    <div className="p-6">
                        <div className="flow-root">
                            <ul className="-mb-8">
                                <li>
                                    <div className="relative pb-8">
                                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                        <div className="relative flex space-x-3">
                                            <div>
                                                <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                <div>
                                                    <p className="text-sm text-gray-500">Nuevo empleado <span className="font-medium text-gray-900">Ana García</span> registrada</p>
                                                </div>
                                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                    <time dateTime="2024-01-23">Hace 2h</time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="relative pb-8">
                                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                        <div className="relative flex space-x-3">
                                            <div>
                                                <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                <div>
                                                    <p className="text-sm text-gray-500">Actualización de precios en servicios</p>
                                                </div>
                                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                    <time dateTime="2024-01-23">Hace 6h</time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}