import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RegistrationNumber from './pages/RegistrationNumber';
import RequestVacantProperty from './pages/RequestVacantProperty';


export default function App() {
  return (
    <div className='flex flex-col min-h-screen'>    
      <BrowserRouter>
        <NavBar />
        <main className='flex-1 flex flex-col justify-center'>
          <Routes>
            <Route path='/' element={<Navigate to={'/numero-matricula'} replace />} />
            <Route path='/numero-matricula' element={<RegistrationNumber />} />
            <Route path='/solicitud-predio-desocupado' element={<RequestVacantProperty />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
