import React, { useEffect, useState } from 'react'
import { GoChevronDown } from "react-icons/go";
// import { useParams } from 'react-router-dom';
// import { getPropertyByNumberPlate } from '../services/propertiesController';
// import { getOwnerById } from '../services/ownersController';


export default function RequestVacantProperty() {
  // const { numberPlate } = useParams();
  // const [propertyData, setPropertyData] = useState(null);
  // const [ownerData, setOwnerData] = useState(null);
  const [cause, setCause] = useState('unoccupiedHouse');
  const [meansResponse, setMeansResponse] = useState('whatsappResponse');

  // useEffect(() => {
  //   const fetchPropertyAndOwnerData = async () => {
  //     try {
  //       if (numberPlate) {
  //         const property = await getPropertyByNumberPlate(numberPlate);
  //         setPropertyData(property);
  //         console.log('Datos del predio: ', property);          

  //         if (property && property._id) {
  //           const owner = await getOwnerById(property._id);
  //           setOwnerData(owner);
  //           console.log('Datos del propietario: ', owner);            
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error al obtener los datos del predio y del propietario.", error);        
  //     }
  //   };

  //   fetchPropertyAndOwnerData();
  // }, [numberPlate]);

  return (
    <div className='flex flex-col justify-center items-center gap-6 p-12'>
      <p className='font-semibold text-2xl mb-4'>Solicitud de Predio Desocupado</p>
      <section className='flex flex-col gap-6 w-[550px] h-[240px] bg-white border border-gray-300 border-b rounded-lg py-4'>
        <div className='flex justify-center items-center border-b pb-4'>
          <p className='text-xl font-medium'>Suscriptor y predio</p>
        </div>
        {/* {propertyData && ownerData ? (
          
        ) : (
          <p className='text-center'>Cargando datos...</p>
        )} */}
        <div className='flex flex-col gap-2 px-8'>
          <p><span className='font-semibold'>Matrícula: </span>1234</p>
          <p><span className='font-semibold'>Suscriptor: </span>1234</p>
          <p><span className='font-semibold'>Nombres: </span>Jesús Eduardo Paladinez Vargas</p>
          <p><span className='font-semibold'>Dirección: </span>Cll 70N #8A-92</p>
        </div>
        
      </section>
      <section className='w-[550px] h-[960px] bg-white border border-gray-300 rounded-lg py-4'>
        <div className='flex justify-center items-center border-b pb-4'>
          <p className='text-xl font-medium'>Datos del solicitante</p>
        </div>
        <form>
          <div className='flex flex-col gap-1 px-8 py-6'>
            <label htmlFor="fullName">Nombre completo: </label>
            <input type="text" id='fullName' className='py-1 px-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            
            <label htmlFor="identification">Cédula: </label>
            <input type="text" id='identification' className='py-1 px-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            
            <label htmlFor="address">Dirección: </label>
            <input type="text" id='address' className='py-1 px-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            
            <label htmlFor="phone">Número celular: </label>
            <input type="text" id='phone' className='py-1 px-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            
            <label htmlFor="email">Correo electrónico: </label>
            <input type="text" id='email' className='py-1 px-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
          </div>
          
          <div className='flex flex-col px-8 gap-10'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="cause">Causa del predio desocupado: </label>
              <div className='relative w-60'>
                <select id='cause' value={cause} onChange={(e) => setCause(e.target.value)} className='block w-full appearance-none py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300'>
                  <option value="unoccupiedHouse">Casa desocupada</option>
                  <option value="unoccupiedApartment">Apartamento desocupado</option>
                  <option value="unoccupiedStudioApartment">Apartaestudio desocupado</option>
                  <option value="unoccupiedPremises">Local desocupado</option>
                  <option value="propertyUnderConstruction">Predio en construcción</option>
                  <option value="propertyUnderDemolition">Predio en demolición</option>
                  <option value="emptyLot">Lote vacío</option>
                </select>
                <GoChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400' />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='mb-2'>¿Por qué medio desea recibir la respuesta?</p>
              <div className='flex items-center mb-2'>
                <input type="radio" id="whatsappResponse" name="options" value="whatsappResponse" className='mr-2' checked={meansResponse === 'whatsappResponse'} onChange={() => setMeansResponse('whatsappResponse')}/>
                <label htmlFor="whatsappResponse">WhatsApp</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" id="emailResponse" name="options" value="emailResponse" className='mr-2' checked={meansResponse === 'emailResponse'} onChange={() => setMeansResponse('emailResponse')}/>
                <label htmlFor="emailResponse">Correo electrónico</label>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <label htmlFor="receipt">Adjuntar recibo del acueducto (Foto o PDF): </label>
              <input type="file" id='receipt'/>
            </div>

            <div className='flex items-center'>
              <input type="checkbox" id='dataPolicy' className='mr-2' />
              <label htmlFor="dataPolicy" className='text-sm'>Aceptar política de tratamiento de datos personales.</label>
            </div>
            
            <div className='flex justify-center'>
              <button className='bg-urbaser-1 hover:text-urbaser-2 text-white py-2 px-4 rounded-md'>Enviar</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
