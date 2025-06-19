import { useState } from "react"

import axios from 'axios'
export function ServiciosProductos({ servicios ,productos,listaActualizadaServicios,listaActualizadaProductos}) {
    const [activoProducto,setActivoProducto] = useState(false)
    const API = import.meta.env.VITE_URL_API
    const [activoServicio,setActivoServicio] = useState(false)
    const [tab,setTab] =useState(0)

    const [nombre , setNombre] = useState('')
    const [precio , setPrecio] = useState('')
    const [descripcion , setDescripcion] = useState('')
    const [duracion,setDuracion]=useState('')


    const handleSumbit = (e)=>{
        e.preventDefault()
        axios.post(`${API}/api/crear_servicio/`,{nombre,precio,descripcion,duracion},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(()=>{
            listaActualizadaServicios()
            alert('Servicio Creado Correctamente')
            setActivoServicio(false)
            setDuracion('')
            setPrecio('')
            setNombre('')
            setDescripcion('')
            setTab(0)
        })
        .catch((error)=>{
            alert(error)
            setDuracion('')
            setPrecio('')
            setNombre('')
            setDescripcion('')
        })
    }


    const handleSumbitProducto = (e)=>{
        e.preventDefault()
        axios.post(`${API}/api/crear_producto/`,{nombre,precio,descripcion},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(()=>{
            listaActualizadaProductos()
            alert('Producto Creado Correctamente')
            setActivoProducto(false)
            setPrecio('')
            setNombre('')
            setDescripcion('')
            setTab(1)
        })
        .catch((error)=>{
            alert(error)
            setPrecio('')
            setNombre('')
            setDescripcion('')
        })
    }

    const eliminarProducto = (id) =>{
        axios.delete(`${API}/api/eliminar_producto/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(()=>{
            listaActualizadaProductos()
        })
    }

    return (
        <div className="card shadow-lg">
            <div className="card-body">
                <div className="container-fluid">
                    {/* Header Section */}
                    <div className="mb-4">
                        <h1 className="h2 fw-bold text-dark">Gestión de Servicios y Productos</h1>
                        <p className="mt-2 text-muted">Administra los servicios y productos de tu barbería</p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-4 border-bottom">
                        <nav className="nav nav-tabs border-0">
                            <button onClick={()=>setTab(0)} className={`nav-link border-0 text-muted fw-medium small ${tab === 0 ? 'active text-primary border-bottom border-primary' : 'hover:text-dark'}`}>
                                Servicios
                            </button>
                            <button onClick={()=>setTab(1) }  className={`nav-link border-0 text-muted fw-medium small ${tab === 1 ? 'active text-primary border-bottom border-primary' : 'hover:text-dark'}`}>
                                Productos
                            </button>
                        </nav>
                    </div>

                    {/* Action Buttons */}
                    <div className="mb-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-2">
                            <button onClick={()=>setActivoServicio(true)} className="btn btn-primary">
                                Nuevo Servicio
                            </button>
                            <button onClick={()=>setActivoProducto(true)} className="btn btn-primary">
                                Nuevo Producto
                            </button>
                        </div>
                        <div className="position-relative">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="form-control ps-5 pe-4 py-2 border-secondary focus-ring focus-ring-primary"
                            />
                            <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <svg className="text-muted" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Services Table */}
                    {tab === 0 && (
                        <div className="card shadow-sm">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Nombre
                                        </th>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Descripción
                                        </th>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Duración
                                        </th>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Precio
                                        </th>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Sample Service Row */}
                                    {servicios.map((servicio)=>(
                                        <tr key={servicio.id}>
                                        <td>
                                            <div className="small fw-medium text-dark"> {servicio.nombre} </div>
                                        </td>
                                        <td>
                                            <div className="small text-muted"> {servicio.descripcion}</div>
                                        </td>
                                        <td>
                                            <div className="small text-muted">{servicio.duracion}</div>
                                        </td>
                                        <td>
                                            <div className="small text-dark">{servicio.precio}</div>
                                        </td>
                                        <td className="small fw-medium">
                                            <button className="btn btn-link btn-sm text-primary p-0 me-3">Editar</button>
                                            <button className="btn btn-link btn-sm text-danger p-0">Eliminar</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}


                    {/* Tabla de productos */}
                    {tab === 1 && (
                        <div className="card shadow-sm">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Nombre
                                        </th>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Descripción
                                        </th>
                    
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Precio
                                        </th>
                                        <th className="border-0 text-muted small text-uppercase fw-medium">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Sample Service Row */}
                                    {productos.map((producto)=>(
                                        <tr key={producto.id}>
                                        <td>
                                            <div className="small fw-medium text-dark"> {producto.nombre} </div>
                                        </td>
                                        <td>
                                            <div className="small text-muted"> {producto.descripcion}</div>
                                        </td>
                                        <td>
                                            <div className="small text-dark">{producto.precio}</div>
                                        </td>
                                        <td className="small fw-medium">
                                            <button className="btn btn-link btn-sm text-primary p-0 me-3">Editar</button>
                                            <button  onClick={() => eliminarProducto(producto.id)} className="btn btn-link btn-sm text-danger p-0">Eliminar</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}


                    {/* Modal Form for New Service */}
                    <div className={`modal fade ${activoServicio ? 'show d-block' : ''}`} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h5 className="fw-medium text-dark mb-3">Nuevo Servicio</h5>
                                    <form onSubmit={handleSumbit}>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Nombre del Servicio</label>
                                            <input
                                                onChange={(e)=>setNombre(e.target.value)}
                                                value={nombre}
                                                type="text"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder="Ej: Corte de Cabello"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Descripción</label>
                                            <textarea
                                                onChange={(e)=>setDescripcion(e.target.value)}
                                                value={descripcion}
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                rows={3}
                                                placeholder="Describe el servicio..."
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Duración (minutos)</label>
                                            <input
                                                onChange={(e)=>setDuracion(e.target.value)}
                                                value={duracion}
                                                type="text"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder="30"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Precio</label>
                                            <input
                                                onChange={(e)=>setPrecio(e.target.value)}
                                                value={precio}
                                                type="number"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder="25.00"
                                            />
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 mt-4">
                                            <button onClick={()=>setActivoServicio(false)}
                                                type="button"
                                                className="btn btn-secondary"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Guardar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Form for New Product */}
                    <div className={`modal fade ${activoProducto ? 'show d-block' : ''}`} style={{backgroundColor: 'rgba(0,0,0,0.5)'}} tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h5 className="fw-medium text-dark mb-3">Nuevo Producto</h5>
                                    <form onSubmit={handleSumbitProducto}>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Nombre del Producto</label>
                                            <input
                                                onChange={(e)=>setNombre(e.target.value)}
                                                value={nombre}
                                                type="text"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder="Ej: Pomada para Cabello"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Descripción</label>
                                            <textarea
                                                onChange={(e)=>setDescripcion(e.target.value)}
                                                value={descripcion}
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                rows={3}
                                                placeholder="Describe el producto..."
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Precio</label>
                                            <input
                                                onChange={(e)=>setPrecio(e.target.value)}
                                                value={precio}
                                                type="number"
                                                className="form-control border-secondary focus-ring focus-ring-primary"
                                                placeholder="15.00"
                                            />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label className="form-label fw-medium text-dark">Imagen del Producto</label>
                                            <div className="border-2 border-dashed border-secondary rounded p-4 text-center">
                                                <div>
                                                    <svg className="mx-auto text-muted mb-2" width="48" height="48" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <div className="d-flex justify-content-center small text-muted">
                                                        <label className="cursor-pointer text-primary fw-medium me-1">
                                                            <span>Subir una imagen</span>
                                                            <input type="file" className="d-none" />
                                                        </label>
                                                        <span>o arrastrar y soltar</span>
                                                    </div>
                                                    <p className="small text-muted mb-0">PNG, JPG, GIF hasta 10MB</p>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="d-flex justify-content-end gap-2 mt-4">
                                            <button onClick={()=>setActivoProducto(false)}
                                                type="button"
                                                className="btn btn-secondary"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
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
            </div>
        </div>
    )
} 