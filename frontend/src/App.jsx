import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './pages/Login'
import { Navbar } from './componentes/Navbar'
import { Footer } from './componentes/Footer'
import { Home } from './pages/Home'
import { AdminPanel } from './pages/AdminPanel'
import { BarberPanel } from './pages/BarberPanel'
import { Register } from './pages/Register'
import { Tienda } from './pages/clientePages/Tienda'

import axios from 'axios'

import {jwtDecode} from 'jwt-decode'

import { useState,useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function App() {
  const [logueado , setLogueado] = useState(false)
  const [rol , setRol] = useState('')
  const API = import.meta.env.VITE_URL_API
  

  const verifyRol = ()=>{
    axios.get(`${API}/api/verificar_rol/`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    .then(res=>{
      console.log(res.data.rol)
      setRol(res.data.rol)
    })
    .catch((error)=>{
      console.log(error)
      setRol('')
    })
  }


  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token && typeof token === 'string'){
      const decode = jwtDecode(token)
      if (decode.exp && Date.now() /1000 <decode.exp){
        setLogueado(true)
        verifyRol()
      }else{
        setLogueado(false)
        localStorage.clear()
      }
    }
  },[])

  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        {rol != 'A' && (<Navbar/>)}
        <main className='flex-fill'>
            <Routes>
              <Route path='/' element={
                logueado? (
                  rol === 'B' ? (
                    <Navigate to='/barber_panel'/>
                  ) : rol === 'A' ? (
                    <Navigate to='/admin_panel'/>
                  ) : (
                    <Home/>
                  )
                ) : (
                  <Home />
                )} />
              <Route path='/login' element={
                logueado? (
                  rol === 'B' ? (
                    <Navigate to='/barber_panel'/>
                  ) : rol === 'A' ? (
                    <Navigate to='/admin_panel'/>
                  ) : (
                    <Navigate to='/'/>
                  )
                ) : (
                  <Login setLogueado={setLogueado}/>
                )}/>
              <Route path='/register' element={
                logueado? (
                  rol === 'B' ? (
                    <Navigate to='/barber_panel'/>
                  ) : rol === 'A' ? (
                    <Navigate to='/admin_panel'/>
                  ) : (
                    <Navigate to='/'/>
                  )
                ) : (
                  <Register setLogueado={setLogueado} />
                )}/>
              <Route path='/admin_panel' element={
                logueado? (
                  rol === 'B' ? (
                    <Navigate to='/barber_panel'/>
                  ) : rol === 'A' ? (
                    <AdminPanel />
                  ) : (
                    <Navigate to='/'/>
                  )
                ) : (
                  <Login setLogueado={setLogueado} />
                )}/>
              <Route path='/barber_panel' element={
              logueado? (
                  rol === 'B' ? (
                    <BarberPanel />
                  ) : rol === 'A' ? (
                    <Navigate to='/admin_panel'/>
                  ) : (
                    <Navigate to='/'/>
                  )
                ) : (
                  <Login setLogueado={setLogueado} />
                )}/>


                <Route path='/tienda' element={<Tienda/>}/>
            </Routes>
        </main>
        {rol != 'A' && (<Footer/>)}
      </div>
    </BrowserRouter>
  )
}

export default App 