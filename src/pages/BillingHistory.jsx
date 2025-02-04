import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { getPropertyById } from '../services/propertiesController';
import { PropertiesContext } from '../context/PropertiesContext';
import { getOwnerById } from '../services/ownersController';

export default function BillingHistory() {
  const { propertyId } = useContext(PropertiesContext);
  const [propertyData, setPropertyData] = useState(null);
  const [ownerData, setOwnerData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {    
    const fetchPropertyAndOwnerData = async () => {
      try {
        if (propertyId) {
          const property = await getPropertyById(propertyId);
          setPropertyData(property);

          if (property && property.owner) {
            const owner = await getOwnerById(property.owner);
            setOwnerData(owner);
          } else {
            console.error("El predio no tiene un propietario asociado.");            
          }
        }
      } catch (error) {
        console.error("Error al obtener los datos del predio y del propietario: ", error);
      }
    }
    
    fetchPropertyAndOwnerData();
  }, [propertyId]);

  const handleFinish = () => {
    navigate('/nota-importante');
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 p-14 text-urbaser-1'>
      <p className='font-semibold text-2xl'>Historial de facturación</p>
      <div className='bg-white border border-gray-300 rounded-lg w-[700px] h-[700px] flex flex-col gap-6 p-12'>
        {propertyData ? (
          <>
            <p><span className='font-medium'>Matrícula: </span>{propertyData.number_plate}</p>
            <p><span className='font-medium'>Suscriptor: </span>{propertyData.subscriber}</p>
            <p><span className='font-medium'>Propietario: </span>{ownerData ? ownerData.full_name : "No tiene un propietario vínculado."}</p>
            <p><span className='font-medium'>Dirección: </span>{propertyData.address} {propertyData.neighborhood}</p>
            <p><span className='font-medium'>Barrido de calles: </span>2 veces por semana</p>
            <p><span className='font-medium'>Recolección residuos sólidos urbanos: </span>2 veces por semana</p>
            <p><span className='font-medium'>Consumo: </span>2</p>
            <p><span className='font-medium'>Unidades residenciales: </span>1</p>
            <p><span className='font-medium'>Unidades comerciales: </span>0</p>
            <p><span className='font-medium'>Estrato: </span>1</p>
            <p><span className='font-medium'>Pago mensual de aseo: </span>14.500</p>
            <p><span className='font-medium'>Predio desocupado: </span>2 meses</p>
          </>
        ) : (
          <p>Cargando...</p>
        )}        
        <div className='flex justify-center' onClick={handleFinish}>
          <button className='bg-urbaser-1 px-4 py-2 rounded-md text-white hover:text-urbaser-2'>Finalizar</button>
        </div>
      </div>
    </div>
  )
}
