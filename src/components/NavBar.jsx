import React from 'react';
import { BiSupport } from 'react-icons/bi'


export default function NavBar() {
  return (
    <div className='bg-blue-600 flex justify-start items-center px-5 py-4 text-xl gap-3'>
      <BiSupport className='text-white' />
      <p className='text-white'>Atención en Línea</p>
    </div>
  )
}
