import React from 'react';
import { Link } from 'react-router-dom';
import { BiSupport } from 'react-icons/bi'


export default function NavBar() {
  return (
    <div className='bg-blue-600 px-5 py-4 text-xl flex justify-start items-center gap-3'>
      <Link to='/'>
        <BiSupport className='text-white' />
      </Link>
      <Link to='/'>
        <p className='text-white'>Atención en Línea</p>
      </Link>
    </div>
  )
}
