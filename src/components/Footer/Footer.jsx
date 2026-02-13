import React from 'react'

const Footer = () => {



  return (

    <footer className='flex justify-between px-6 py-6 items-center' style={{backgroundColor: '#f7f6f6ff'}}>
      
      <div>

        <a className=''>
          © 2026 Adrian Rivero. Todos los Derechos Reservados.
        </a>

      </div>

      <div className='flex'>

        <ul className='flex flex-wrap items-center'>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Politica Privacidad</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licencia</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contacto</a>
        </li>
        </ul>

      </div>

    </footer>
  )
}

export default Footer