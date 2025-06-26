import axios from "axios"
import { useEffect ,useState} from "react"
export function Tienda() {
    const API = import.meta.env.VITE_URL_API
    const [productos , setproductos] = useState([])
    

    const agregarItemCarrito = async(productoID,cantidad = 1) => {
        const data = {producto : productoID ,cantidad : cantidad}
        await axios.post(`${API}/api/items/`,data,{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then((res)=>{
            console.log(res.data)
            alert('agregado')
        })
        .catch(()=>alert('no agregado'))
    }

    const listar_productos = () =>{
        axios.get(`${API}/api/productos/`,{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then((res)=>{
            setproductos(res.data)
        })
        .catch(()=>setproductos([]))
    }

    useEffect(()=>{
        listar_productos()
    },[])


    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Tienda Ziara</h2>
            <div className="row g-4">

                {/* Producto 1 */}
                {productos.map((producto)=>(
                    <div key={producto.id} className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Producto 1" />
                        <div className="card-body">
                            <h5 className="card-title"> {producto.nombre} </h5>
                            <p className="card-text"> {producto.descripcion} </p>
                            <p className="fw-bold"> {producto.precio} </p>
                            <button onClick={()=>agregarItemCarrito(producto.id)} className="btn btn-warning w-100">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>
    )
}
