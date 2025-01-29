import React from 'react';
import { FaLink } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';

export default function Footer() {
  return (
    <footer className={`bg-urbaser-1 flex justify-around items-center p-4`}>
      {/* <p className="text-gray-500">&copy; {currentYear}. Todos los derechos reservados.</p> */}
      <p className='font-semibold text-urbaser-2 text-2xl'>Vísita nuestras <br />líneas de atención.</p>
      <ul className='flex flex-col gap-4 text-white p-4'>
        <li><a href="https://urbaser.co/popayan" target='_blank' rel='noopener noreferrer' className='hover:text-urbaser-2 flex items-center gap-x-2'><FaLink className='text-urbaser-2 text-xl'/>https://urbaser.co/popayan</a></li>
        <li><a href="mailto:notificacionesoficiales.popayan@urbaser.co" className='hover:text-urbaser-2 flex items-center gap-x-2'><HiOutlineMail className='text-urbaser-2 text-xl' />notificacionesoficiales.popayan@urbaser.co</a></li>
        <li><a href="tel:3112403041" className='hover:text-urbaser-2 flex items-center gap-x-2'><ImPhone className='text-urbaser-2 text-base'/>3112403041</a></li>
      </ul>
    </footer>
  )
}
