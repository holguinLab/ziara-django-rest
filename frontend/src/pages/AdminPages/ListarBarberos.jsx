export function ListarBarberos({barberos}) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="overflow-x-auto">
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
            </div>
        </div>
    )
}