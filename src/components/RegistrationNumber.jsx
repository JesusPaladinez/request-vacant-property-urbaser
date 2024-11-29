import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function RegistrationNumber() {
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate('/solicitud-predio-desocupado');
  }

  return (
    <div className='bg-white w-96 min-h-72 p-4 border border-gray-300 rounded-xl flex flex-col items-center'>
      <div className='w-full border-b pt-1 pb-4'>
        <p className='text-center text-xl font-semibold'>URBASER POPAYÁN</p>
      </div>
      <div className='flex flex-col justify-center items-center flex-1 mt-4 gap-6'>
        <p className='text-center'>
          Para utilizar el sistema, ingrese el número de matrícula de su factura de pago.
        </p>
        <form className='flex flex-col items-center gap-4' onSubmit={handlesubmit}>
          <input type="text" placeholder='Número de matrícula' className='w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
          <button className='bg-blue-600 hover:bg-blue-700 text-white w-24 py-2 px-4 rounded-md'>Ingresar</button>
        </form>
      </div>
    </div>
  )
}
