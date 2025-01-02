import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex justify-center p-4'>
      <p className='text-gray-500'>&copy; {currentYear}. Todos los derechos reservados.</p>
    </footer>
  )
}
