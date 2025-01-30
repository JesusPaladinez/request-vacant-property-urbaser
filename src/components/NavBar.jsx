import React from 'react';
import { Link } from 'react-router-dom';
import logoUrbaser from '../assets/logoUrbaserDark.svg';


export default function NavBar() {
  return (
    <nav className='bg-urbaser-1 px-8 py-8 pr-12 text-xl flex justify-between items-center gap-3'>
      <Link to='/'>
        <img src={logoUrbaser} className='h-8' />
      </Link>
      <p className='text-white'>Popayán, Cauca</p>
    </nav>
  )
}
