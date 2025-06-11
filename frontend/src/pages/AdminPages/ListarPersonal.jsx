import { useState } from "react"
export function ListarPersonal({barberos,clientes}) {
    const [tab,setTab] =useState(0)
    const [activo,setActivo] = useState(false)
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Gestión de Personal</h1>
                    <p className="mt-2 text-gray-600">Administra los empleados y clientes de tu barbería</p>
            </div>
            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <button onClick={()=>setTab(0)} className={`text-gray-500  whitespace-nowrap py-4 px-1 ${tab === 0 ? ' border-b-2 text-indigo-600' : 'hover:text-gray-700 hover:border-gray-300' }  font-medium text-sm`}>
                        Barberos
                    </button>
                    <button onClick={()=>setTab(1) }  className={`${tab === 1 ? 'border-b-2 text-indigo-600' : 'hover:text-gray-700 hover:border-gray-300 border-transparent' }  text-gray-500  whitespace-nowrap py-4 px-1  font-medium text-sm`}>
                        Clientes
                    </button>
                    <button onClick={()=>setTab(2) }  className={`${tab === 2 ? 'border-b-2 text-indigo-600' : 'hover:text-gray-700 hover:border-gray-300 border-transparent' }  text-gray-500  whitespace-nowrap py-4 px-1  font-medium text-sm`}>
                        Administradores
                    </button>
                </nav>
            </div>

            <div className="mb-6 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <button onClick={()=>setActivo(true)}  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                            Registrar Cuenta
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div className={`fixed z-1 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${activo?'block':'hidden'} `}>
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Nueva Cuenta</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Ej: barbero@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                                    <input
                                        type="password"
                                        className="mt-1 text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder=" ******* "
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Duración (minutos)</label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="30"
                                    />
                                </div>

                                <div className="flex justify-end space-x-3 mt-5">
                                    <button onClick={()=>setActivo(false)}
                                        type="button"
                                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




            {/* Barberos */}

            <div className="overflow-x-auto">
                {tab === 0 && (
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Barbero
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Última Visita
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {barberos.map((barbero)=>(
                            <tr key={barbero.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-600 font-medium">Jjsjjs</span>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">{barbero.usuario.first_name}</p>
                                        <p className="text-xs text-gray-500"> {barbero.usuario.email} </p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-4 py-3 text-sm text-gray-500"> {barbero.usuario.last_login?.slice(0, 10)} </td>
                            <td className="px-4 py-3 text-sm">
                                <button className="text-blue-600 hover:text-blue-800 mr-3">
                                    Ver
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                )}



                {tab === 1 && (
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Cliente
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Última Visita
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {clientes.map((cliente)=>(
                            <tr key={cliente.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-600 font-medium">Jjsjjs</span>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">{cliente.usuario.first_name}</p>
                                        <p className="text-xs text-gray-500"> {cliente.usuario.email} </p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-4 py-3 text-sm text-gray-500"> {cliente.usuario.last_login?.slice(0, 10)} </td>
                            <td className="px-4 py-3 text-sm">
                                <button className="text-blue-600 hover:text-blue-800 mr-3">
                                    Ver
                                </button>
                                <button className="text-red-600 hover:text-red-800">
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
    )
}