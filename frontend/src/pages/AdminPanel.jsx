import axios from "axios"
import { useEffect,useState } from "react"
import { Dashboard } from "./AdminPages/Dashboard"

import { ListarPersonal } from "./AdminPages/ListarPersonal"
import { ServiciosProductos } from "./AdminPages/ServiciosProductos.jsx"

export function AdminPanel() {
    const API = import.meta.env.VITE_URL_API
    const token = localStorage.getItem('token')
    const [acces,setAccess] = useState(false)
    const [activo , setActivo] = useState('dashboard')


    const [clientes , setClientes] = useState([])
    const [barberos , setBarberos] = useState([])
    const [servicios , setServicios] = useState([])
    const [productos , setProductos] = useState([])
    

    const listarServicios = ()=>{
            axios.get(`${API}/api/servicios/`,{headers:{
            Authorization:`Bearer ${token}`
        }})
        .then((res =>{
            setAccess(true)
            setServicios(res.data)
        }))
        .catch((error)=>{
            if(error && error.response.status === 403){
                alert('Te Pillamos Malicioso')
            }
        })
        }
    const listarProductos = ()=>{
            axios.get(`${API}/api/productos/`,{headers:{
            Authorization:`Bearer ${token}`
        }})
        .then((res =>{
            setAccess(true)
            setProductos(res.data)
        }))
        .catch((error)=>{
            if(error && error.response.status === 403){
                alert('Te Pillamos Malicioso')
            }
        })
        }


    useEffect(()=>{
        axios.get(`${API}/api/listar_clientes/`,{headers:{
            Authorization:`Bearer ${token}`
        }})
        .then((res =>{
            setAccess(true)
            setClientes(res.data)
        }))
        .catch((error)=>{
            if(error && error.response.status === 403){
                alert('Te Pillamos Malicioso')
            }
        })

        axios.get(`${API}/api/barberos/`,{headers:{
            Authorization:`Bearer ${token}`
        }})
        .then((res =>{
            setAccess(true)
            setBarberos(res.data)
        }))
        .catch((error)=>{
            if(error && error.response.status === 403){
                alert('Te Pillamos Malicioso')
            }
        })
        
        listarServicios()
        listarProductos()
    },[])
    return (
        acces ? (
            <div className="min-vh-100 d-flex bg-light">
            {/* Sidebar */}
            <aside className="  bg-dark text-white" style={{width: '16rem', zIndex: 1050}}>
                <div className="p-3">
                    <div className="d-flex align-items-center">
                        <svg className="text-warning me-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
                        </svg>
                        <span className="h4 fw-bold mb-0">ZIARA</span>
                    </div>
                    <span className="text-muted small mt-1 d-block">Panel de Administración</span>
                </div>

                <nav className="mt-4">
                    <div className="px-3">
                        <button onClick={()=>setActivo('dashboard')} className={`w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-decoration-none rounded ${activo === "dashboard" ? "bg-secondary text-white" : "text-light bg-transparent"}`}>
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                        </button>

                        <button onClick={()=>setActivo('personal')} className={`w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-decoration-none rounded ${activo === "personal" ? "bg-secondary text-white" : "text-light bg-transparent"}`}>
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Gestión de Personal
                        </button>
                        
                        <button onClick={()=>setActivo('servicios')} className={`w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-decoration-none rounded ${activo === "servicios" ? "bg-secondary text-white" : "text-light bg-transparent"}`}>
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Servicios y Productos
                        </button>

                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-decoration-none rounded text-light">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Finanzas
                        </a>
                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-decoration-none rounded text-light">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Servicios y Precios
                        </a>
                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-decoration-none rounded text-light">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Reportes
                        </a>
                        <a href="#" className="w-100 d-flex align-items-center px-3 py-2 text-start small border-0 bg-transparent text-decoration-none rounded text-light">
                            <svg className="me-3" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Configuración
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-fill ms-auto p-4" style={{marginLeft: '16rem'}}>
                {activo === 'dashboard' && (
                    <Dashboard clientes={clientes} barberos={barberos}/>
                )}
                {activo === 'personal' && (
                    <ListarPersonal barberos={barberos} clientes={clientes}/>
                )}
                {activo === 'servicios' && (
                    <ServiciosProductos servicios={servicios}  productos={productos} listaActualizadaServicios={listarServicios} listaActualizadaProductos={listarProductos}/>
                )}
            </main>
        </div>
        ) : (
            <div> GOla</div>
        )
        
    )
} 