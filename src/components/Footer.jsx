import React from 'react';
import { LuLink2 } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';

export default function Footer() {
  return (
    <footer className={`bg-urbaser-1 flex justify-around items-center p-4`}>
      <p className='font-semibold text-urbaser-2 text-2xl'>Vísita nuestras <br />líneas de atención.</p>
      <ul className='flex flex-col gap-4 text-white p-4'>
        <li><a href="https://urbaser.co/popayan" target='_blank' rel='noopener noreferrer' className='hover:text-urbaser-2 flex items-center gap-x-2'><LuLink2 className='text-urbaser-2 hover:text-white text-xl'/>https://urbaser.co/popayan</a></li>
        <li><a href="mailto:notificacionesoficiales.popayan@urbaser.co" className='hover:text-urbaser-2 flex items-center gap-x-2'><HiOutlineMail className='text-urbaser-2 hover:text-white text-xl' />notificacionesoficiales.popayan@urbaser.co</a></li>
        <li><a href="tel:3112403041" className='hover:text-urbaser-2 flex items-center gap-x-2'><ImPhone className='text-urbaser-2 hover:text-white text-base' />Llamadas y WhatsApp: <span className='font-medium'>311 240 3041</span></a></li>
      </ul>
    </footer>
  )
}
