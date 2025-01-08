import React from 'react'
import { GoChevronDown } from "react-icons/go";


export default function RequestVacantProperty() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 p-12'>
      <p className='font-semibold text-2xl mb-4'>Solicitud de Predio Desocupado</p>
      <section className='flex flex-col gap-6 w-[550px] h-[240px] bg-white border border-gray-300 border-b rounded-lg py-4'>
        <div className='flex justify-center items-center border-b pb-4'>
          <p className='text-xl font-medium'>Suscriptor y predio</p>
        </div>
        <div className='flex flex-col gap-2 px-8'>
          <p><span className='font-semibold'>Matrícula: </span>1234</p>
          <p><span className='font-semibold'>Suscriptor: </span>1234</p>
          <p><span className='font-semibold'>Nombres: </span>Diana Carolina Zuñiga</p>  
          <p><span className='font-semibold'>Dirección: </span>Carrera 4 #2-23 Centro</p>
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
                <select id='cause' className='block w-full appearance-none py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300'>
                  <option value="" disabled selected>Seleccione</option>
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
                <input type="radio" id="whatsappResponse" name="options" value="whatsappResponse" className='mr-2' checked />
                <label htmlFor="whatsappResponse">WhatsApp</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" id="emailResponse" name="options" value="emailResponse" className='mr-2' />
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
              <button className='bg-blue-600 hover:bg-blue-700 text-white w-24 py-2 px-4 rounded-md'>Enviar</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
