import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getPropertyByNumberPlate } from '../services/propertiesController';
  

export default function RegistrationNumber() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getPropertyByNumberPlate(registrationNumber);
      console.log(data);
      if (data) {
        navigate('/solicitud-predio-desocupado');
      } 
    } catch (error) {
      setError('Ingrese un número de matrícula correcto.');
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-14 h-full'>
      <p className='text-2xl font-semibold'>Bienvenido al sistema de atención en línea - Predios desocupados</p>
      <div className='bg-white w-96 min-h-72 py-4 border border-gray-300 rounded-xl flex flex-col items-center px-6'>
        <div className='w-full border-b pt-1 pb-4'>
          <p className='text-center text-xl font-semibold'>URBASER POPAYÁN</p>
        </div>
        <div className='flex flex-col justify-center items-center flex-1 mt-4 gap-6'>
          <p className='text-center'>
            Para utilizar el sistema, ingrese el número de matrícula de su factura de pago.
          </p>
          <form className='flex flex-col items-center gap-6' onSubmit={handlesubmit}>
            <input type="text" id='registrationNumber' value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} placeholder='Número de matrícula' className='w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            {error && <p className='text-red-500 text-center text-sm'>{error}</p>}
            <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white w-24 py-2 px-4 rounded-md'>Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
