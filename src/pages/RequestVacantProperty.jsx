import React from 'react'


export default function Request() {
  return (
    // <div className='flex flex-col items-center p-12'>
      <div className='flex flex-col justify-center items-center gap-6 p-12'>
        <p className='font-semibold text-2xl'>Solicitud de Predio Desocupado</p>
        <div className='flex flex-col gap-6 w-[450px] h-[240px] bg-white border border-gray-300 border-b rounded-lg py-4'>
          <div className='flex justify-center items-center border-b pb-4'>
          <p className='text-xl font-medium'>Suscriptor y predio</p>
          </div>
          <div className='flex flex-col gap-2 px-8'>
            <p><span className='font-semibold'>Cuenta: </span>25166</p>
            <p><span className='font-semibold'>Suscriptor: </span>25166</p>
            <p><span className='font-semibold'>Nombres: </span>Wilmer Mamián</p>
            <p><span className='font-semibold'>Dirección: </span>Carrera 4 # 2-23</p>
          </div>
        </div>
        <div className='w-[450px] h-[600px] bg-white border border-gray-300 rounded-lg py-4'>
          <div className='flex justify-center items-center border-b pb-4'>
            <p className='text-xl font-medium'>Datos del solicitante</p>
          </div>
          <form className='flex flex-col gap-1 px-8 py-6'>
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
            <label htmlFor="cause">Causa del predio desocupado: </label>
            <div className='relative'>
              <select id='cause' className='py-1 px-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300'>
                <option value="" disabled selected>Seleccione</option>
                <option value="unoccupiedHouse">Casa desocupada</option>
                <option value="unoccupiedApartment">Apartamento desocupado</option>
                <option value="unoccupiedStudioApartment">Apartaestudio desocupado</option>
                <option value="unoccupiedPremises">Local desocupado</option>
                <option value="propertyUnderConstruction">Predio en construcción</option>
                <option value="propertyUnderDemolition">Predio en demolición</option>
                <option value="emptyLot">Lote vacío</option>
              </select>
            </div>
            <div className='flex justify-center'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white w-24 py-2 px-4 rounded-md'>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    // </div>
  )
}
