import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { getPropertyByNumberPlate } from '../services/propertiesController';
import { PropertiesContext } from '../context/PropertiesContext';
import { toast, Toaster } from 'react-hot-toast';

export default function RegistrationNumber() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const { setPropertyId } = useContext(PropertiesContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const property = await getPropertyByNumberPlate(registrationNumber);
      if (property) {
        setPropertyId(property._id);
        navigate('/historial-facturacion');
      } 
    } catch (error) {
      toast.dismiss();
      toast.error("Número de matrícula incorrecto", {
        duration: 5000,
        position: 'top-center',
      })
    }
  }

  const handleKeyDown = (e) => {
    const keyCode = e.keyCode;
    const allowedKeys = [8, 9, 13, 33, 34, 35, 36, 37, 38, 39, 40, 46];
    if ((keyCode < 48 || keyCode > 57) && !allowedKeys.includes(keyCode)) {
      e.preventDefault();
    }
  }

  return (
    <div className='flex-1 flex flex-col items-center gap-10 p-12'>
      <p className='text-2xl font-semibold text-urbaser-1'>Bienvenido al Sistema de Autogestión</p>
      <div className='bg-white w-96 min-h-72 py-4 border border-gray-300 rounded-xl flex flex-col items-center px-6'>
        <div className='w-full border-b pt-1 pb-4'>
          <p className='text-center text-xl text-urbaser-1 font-semibold'>URBASER POPAYÁN</p>
        </div>
        <div className='flex flex-col justify-center items-center flex-1 mt-4 gap-6'>
          <p className='text-center text-urbaser-1'>
            Para utilizar el sistema, ingrese el número de matrícula de su factura de pago.
          </p>
          <form className='flex flex-col items-center gap-6' onSubmit={handleSubmit}>
            <input type="text" id='registrationNumber' value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} onKeyDown={handleKeyDown} inputMode='numeric' placeholder='Número de matrícula' className='w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <button type='submit' className='bg-urbaser-1 hover:text-urbaser-2 text-white w-24 py-2 px-4 rounded-md'>Ingresar</button>
          </form>
          <Toaster /> 
        </div>
      </div>
    </div>
  )
}
