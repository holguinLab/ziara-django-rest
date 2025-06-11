import { useState } from "react"

export function ServiciosProductos({ servicios }) {
    const [activoProducto,setActivoProducto] = useState(false)
    const [activoServicio,setActivoServicio] = useState(false)
    const [tab,setTab] =useState(0)
    return (
        <div className="bg-white rounded-lg shadow-lg p-6  p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Gestión de Servicios y Productos</h1>
                    <p className="mt-2 text-gray-600">Administra los servicios y productos de tu barbería</p>
                </div>

                {/* Tabs */}
                <div className="mb-6 border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <button onClick={()=>setTab(0)} className={`text-gray-500  whitespace-nowrap py-4 px-1 ${tab === 0 ? ' border-b-2 text-indigo-600' : 'hover:text-gray-700 hover:border-gray-300' }  font-medium text-sm`}>
                            Servicios
                        </button>
                        <button onClick={()=>setTab(1) }  className={`${tab === 1 ? 'border-b-2 text-indigo-600' : 'hover:text-gray-700 hover:border-gray-300 border-transparent' }  text-gray-500  whitespace-nowrap py-4 px-1  font-medium text-sm`}>
                            Productos
                        </button>
                    </nav>
                </div>

                {/* Action Buttons */}
                <div className="mb-6 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <button onClick={()=>setActivoServicio(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                            Nuevo Servicio
                        </button>
                        <button onClick={()=>setActivoProducto(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                            Nuevo Producto
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

                {/* Services Table */}
                {tab === 0 && (
                    <div className={`bg-white shadow-md rounded-lg overflow-hidden `}>
                    <table className={`min-w-full divide-y divide-gray-200  `}>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Descripción
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Duración
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Sample Service Row */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">Corte de Cabello</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-500">Corte clásico con tijera y máquina</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">30 min</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">$25.00</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
                                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}


                {/* Tabla de productos */}
                {tab === 1 && (
                    <div className={`bg-white shadow-md rounded-lg overflow-hidden  `}>
                    <table className={`min-w-full divide-y divide-gray-200  `}>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Descripción
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Duración
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Sample Service Row */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">C</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-500">Corte clásico con tijera y máquina</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">30 min</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">$25.00</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
                                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}

                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hidden">
                    {/* Sample Product Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 bg-gray-200">
                            {/* Placeholder for product image */}
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">Pomada para Cabello</h3>
                            <p className="mt-1 text-sm text-gray-500">Pomada de alta fijación para estilos clásicos</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">$15.00</span>
                                <div className="flex space-x-2">
                                    <button className="text-indigo-600 hover:text-indigo-900">Editar</button>
                                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* Modal Form for New Service */}
                <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${activoServicio?'block':'hidden'} `}>
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Nuevo Servicio</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nombre del Servicio</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Ej: Corte de Cabello"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Descripción</label>
                                    <textarea
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        rows={3}
                                        placeholder="Describe el servicio..."
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
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Precio</label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="25.00"
                                    />
                                </div>
                                <div className="flex justify-end space-x-3 mt-5">
                                    <button onClick={()=>setActivoServicio(false)}
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

                {/* Modal Form for New Product */}
                <div  className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Nuevo Producto</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Ej: Pomada para Cabello"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Descripción</label>
                                    <textarea
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        rows={3}
                                        placeholder="Describe el producto..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Precio</label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="15.00"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Imagen del Producto</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Subir una imagen</span>
                                                    <input type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">o arrastrar y soltar</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-3 mt-5">
                                    <button
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
            </div>
        </div>
    )
}