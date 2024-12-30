import React from 'react'


export default function Request() {
  return (
    // <div className='flex flex-col items-center p-12'>
      <div className='flex justify-col gap-6 p-12'>
        <p className='font-semibold text-2xl'>Solicitud de Predio Desocupado</p>
        <div className='w-[450px] h-[400px] bg-white border border-gray-300 border-b rounded-lg p-6'>
          <div>
            <p>Suscriptor y predio</p>
          </div>
          <div>
            <p><span className='font-semibold'>Cuenta: </span>25166</p>
            <p><span className='font-semibold'>Suscriptor: </span>25166</p>
            <p><span className='font-semibold'>Nombres: </span>Wilmer Mamián</p>
            <p><span className='font-semibold'>Dirección: </span>Carrera 4 # 2-23</p>
          </div>
        </div>
        <div className='w-[450px] h-[400px] bg-white border border-gray-300 rounded-lg p-6'>
          <div>
            <p>Datos del solicitante</p>
          </div>
          <form>
            <label htmlFor="fullName">Nombre completo: </label>
            <br />
            <input type="text" id='fullName' className='border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <br />
            <label htmlFor="identification">Cédula: </label>
            <br />
            <input type="text" id='identification' className='border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <br />
            <label htmlFor="address">Dirección: </label>
            <br />
            <input type="text" id='address' className='border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <br />
            <label htmlFor="phone">Número celular: </label>
            <br />
            <input type="text" id='phone' className='border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <br />
            <label htmlFor="email">Correo electrónico: </label>
            <br />
            <input type="text" id='email' className='border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <br />
            <label htmlFor="cause">Causa del predio desocupado: </label>
            <br />
            <select id='cause' className='border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300'>
              <option value="" disabled selected>Seleccione</option>
              <option value="unoccupiedHouse">Casa desocupada</option>
              <option value="unoccupiedApartment">Apartamento desocupado</option>
              <option value="unoccupiedStudioApartment">Apartaestudio desocupado</option>
              <option value="unoccupiedPremises">Local desocupado</option>
              <option value="propertyUnderConstruction">Predio en construcción</option>
              <option value="propertyUnderDemolition">Predio en demolición</option>
              <option value="emptyLot">Lote vacío</option>
            </select>
          </form>
        </div>
      </div>
    // </div>
  )
}
