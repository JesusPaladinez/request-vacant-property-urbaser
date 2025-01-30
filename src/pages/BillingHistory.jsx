import React from 'react'
import { useNavigate, useEffect } from 'react-router-dom';
import { getPropertyById } from '../services/propertiesController';

export default function BillingHistory() {
  

  useEffect(() => {    
    const fetchOwnerData = async () => {
      try {
        const owner = await getOwnerById('1234');
      } catch (error) {
        
      }
    }
    
    return () => {
      
    };
  }, []);

    const navigate = useNavigate();

    const handleFinish = () => {
        navigate('/nota-importante');
    };

  return (
      <div className='flex flex-col items-center justify-center gap-12 p-12 text-urbaser-1'>
        <p className='font-semibold text-2xl'>Historial de facturación</p>
      <div className='bg-white border border-gray-300 rounded-lg w-[700px] h-[700px] flex flex-col gap-6 p-12'>
        <p><span className='font-medium'>Matrícula: </span>1234</p>
        <p><span className='font-medium'>Suscriptor: </span>1234</p>
        <p><span className='font-medium'>Propietario: </span>Jesús Paladinez</p>
        <p><span className='font-medium'>Dirección: </span>Cll 70N #8A-92</p>
        <p><span className='font-medium'>Barrido de calles: </span>2 veces por semana</p>
        <p><span className='font-medium'>Recolección residuos sólidos urbanos: </span>2 veces por semana</p>
        <p><span className='font-medium'>Consumo: </span>2</p>
        <p><span className='font-medium'>Unidades residenciales: </span>1</p>
        <p><span className='font-medium'>Unidades comerciales: </span>0</p>
        <p><span className='font-medium'>Estrato: </span>1</p>
        <p><span className='font-medium'>Pago mensual de aseo: </span>14.500</p>
        <p><span className='font-medium'>Predio desocupado: </span>No</p>
        <div className='flex justify-center' onClick={handleFinish}>
            <button className='bg-urbaser-1 px-4 py-2 rounded-md text-white hover:text-urbaser-2'>Finalizar</button>
        </div>
      </div>
    </div>
  )
}
