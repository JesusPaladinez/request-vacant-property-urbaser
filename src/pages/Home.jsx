import React from 'react'
import RegistrationNumber from '../components/RegistrationNumber'


export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-14 h-full'>
      <p className='text-2xl font-semibold'>Bienvenido al sistema de atención en línea - Predios desocupados</p>
      <RegistrationNumber />
    </div>
  )
}
