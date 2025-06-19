import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './pages/Login'
import { Navbar } from './componentes/Navbar'
import { Footer } from './componentes/Footer'
import { Home } from './pages/Home'
import { AdminPanel } from './pages/AdminPanel'
import { BarberPanel } from './pages/BarberPanel'
import { Register } from './pages/Register'

import {jwtDecode} from 'jwt-decode'

import { useState,useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function App() {
  const [logueado , setLogueado] = useState(false)
  const [rol , setRol] = useState('')
  useEffect(()=>{
    const token = localStorage.getItem('token')
    const rol = localStorage.getItem('rol')
    if (token && typeof token === 'string'){
      const decode = jwtDecode(token)
      if (decode.exp && Date.now() /1000 <decode.exp){
        setLogueado(true)
      }else{
        setLogueado(false)
        localStorage.clear()
      }
    }
    if (rol){
      setRol(rol)
    }
  },[])

  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        {rol != 'A' && (<Navbar/>)}
        <main className='flex-fill'>
            <Routes>
              <Route path='/' element={<Home/>} />
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
                  <Login setLogueado={setLogueado} setRol={setRol}/>
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
                  <Register setLogueado={setLogueado} setRol={setRol}/>
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
                  <Login setLogueado={setLogueado} setRol={setRol}/>
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
                  <Login setLogueado={setLogueado} setRol={setRol}/>
                )}/>
            </Routes>
        </main>
        {rol != 'A' && (<Footer/>)}
      </div>
    </BrowserRouter>
  )
}

export default App 