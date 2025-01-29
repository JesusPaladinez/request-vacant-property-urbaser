import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ImportantNote() {
    const navigate = useNavigate();

    const handleAccept = () => {
        navigate('/numero-matricula');
    }

  return (
    <div className='bg-urbaser-1 flex-1 flex flex-col justify-center items-center gap-12'>
        <p className='font-bold text-white text-2xl'>Nota importante:</p>
        <p className='font-medium text-white text-lg'>Si tiene alguna queja, sugerencia o reclamo lo puede hacer a tráves de un PQR dando clic <a href="https://sispo.syspotec.co:8443/sispaseo/f?p=117:1:103536580903700:::::" target='_blank' rel='noopener noreferrer' className='underline hover:text-urbaser-2'>aquí</a>.</p>
        <div className='flex justify-center'>
            <button className='bg-urbaser-2 hover:bg-white text-urbaser-1 px-4 py-2 rounded-md' onClick={handleAccept}>Aceptar</button>
        </div>
    </div>
  )
}
