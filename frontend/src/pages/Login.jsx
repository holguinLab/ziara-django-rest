import { useState } from "react"
import axios from "axios"
import { useNavigate  } from "react-router-dom"
import { Link } from "react-router-dom"


export function Login({setLogueado,setRol}) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errores , setErrores] = useState([])
    const API = import.meta.env.VITE_URL_API

    const handleForm  = (e) =>{
        e.preventDefault()
        axios.post(`${API}/api/token/`,{username : email,password})
        .then((res=>{
            localStorage.setItem('token',res.data.access)
            localStorage.setItem('rol',res.data.rol)
            alert('Login exitoso')
            setErrores('')
            setEmail('')
            setPassword('')
            setLogueado(true)
            navigate('/admin_panel')
            setRol(res.data.rol)
        }))
        .catch((error=>{
            if(error.response && error.response.status === 400){
                setErrores(error.response.data)
                console.log(errores)
            }
        }))
    }

    return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card shadow-lg border-0 rounded-3 p-4">
                            <div className="text-center mb-4">
                                <h1 className="h3 fw-bold text-dark mb-2">Bienvenido</h1>
                                <p className="text-muted">Ingresa a tu cuenta de barbería</p>
                            </div>

                            <form onSubmit={handleForm}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-medium text-dark">
                                        Correo electrónico
                                    </label>
                                    <input
                                        id="email"
                                        value={email}
                                        onChange={e=> setEmail(e.target.value)}
                                        type="email"
                                        className="form-control border-secondary focus-ring focus-ring-warning"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-medium text-dark">
                                        Contraseña
                                    </label>
                                    <input
                                        id="password"
                                        value={password}
                                        onChange={e=>setPassword(e.target.value)}
                                        type="password"
                                        className="form-control border-secondary focus-ring focus-ring-warning"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-check">
                                        <input
                                            id="remember-me"
                                            type="checkbox"
                                            className="form-check-input border-secondary"
                                        />
                                        <label htmlFor="remember-me" className="form-check-label text-dark">
                                            Recordarme
                                        </label>
                                    </div>
                                    <a href="#" className="text-decoration-none text-warning">
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning w-100 text-white fw-medium py-2"
                                >
                                    Iniciar sesión
                                </button>
                            </form>

                            <p className="mt-4 text-center text-muted small">
                                ¿No tienes una cuenta?
                                <Link to='/register' className="text-decoration-none text-warning fw-medium ms-1">
                                    Regístrate aquí
                                </Link>
                            </p>

                            <div className="mt-4">
                                <div className="position-relative">
                                    <div className="position-absolute top-50 start-0 end-0">
                                        <hr className="border-secondary" />
                                    </div>
                                    <div className="position-relative text-center">
                                        <span className="bg-white px-3 text-muted small">O continúa con</span>
                                    </div>
                                </div>

                                <div className="row g-2 mt-3">
                                    <div className="col-6">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center py-2"
                                        >
                                            <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                                                <path
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    fill="#34A853"
                                                />
                                                <path
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    fill="#FBBC05"
                                                />
                                                <path
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    fill="#EA4335"
                                                />
                                            </svg>
                                            Google
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center py-2"
                                        >
                                            <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.695-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                                            </svg>
                                            GitHub
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
} 