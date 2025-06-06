import { useState } from "react"
import axios from "axios"
import { useNavigate  } from "react-router-dom"
import { Link } from "react-router-dom"


export function Register({setLogueado,setRol}) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errores , setErrores] = useState([])
    const API = import.meta.env.VITE_URL_API

    const handleForm  = (e) =>{
        e.preventDefault()
        axios.post(`${API}/api/register/`,{email,password})
        .then((res=>{
            localStorage.setItem('token',res.data.access)
            localStorage.setItem('rol',res.data.rol)
            alert('Registro exitoso')
            setErrores([])
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
            <div className="max-w-md  mx-auto  px-6 py-8 bg-white shadow-lg rounded-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido</h1>
                    <p className="text-gray-600">Registra tu cuenta con nosotros</p>
                </div>

                <form  onSubmit={handleForm} className="space-y-6 text-black">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={e=> setEmail(e.target.value)}
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Recordarme
                            </label>
                        </div>
                        <a href="#" className="text-sm text-amber-600 hover:text-amber-500">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    ¿Ya tienes una cuenta?
                    <Link to='/login' className="font-medium text-amber-600 hover:text-amber-500">
                        Inicia aquí
                    </Link>
                </p>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">O Registrate con</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
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
                        <button
                            type="button"
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.695-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
    )
}