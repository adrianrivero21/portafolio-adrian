import React from 'react'
import { Form } from 'react-router'

function FormContact() {
  return (
    <div className='text-center font-semibold m-10 sm:m-20 lg:mx-50 lg:my-15'>

      <h1 style={{fontSize: '80px'} }>Empieza tu <span className='text-red-500'> IDEA </span> ahora.</h1>

     <form className='grid grid-cols-1 shadow-md bg-gray-50 gap-8 p-2'>

      <input type='text' placeholder='Nombre Completo' className='border-b'></input>

      <input type='email' id='email' placeholder='Correo Electrónico*' className='border-b'></input>

      <textarea name="mensaje" id="mensaje" placeholder='Dime tu idea' className='border-b'></textarea>

      <div className="flex justify-center mt-4 p-8">
        <button 
         type="submit" className=" border border-gray-500 text-sm font-medium 
             py-4 px-6 rounded-md shadow-sm 
             hover:bg-black-500 focus:outline-none focus:ring-2 
             focus:ring-black-800 transition">Enviar</button>
      </div>
      
     </form>

    </div>
  )
}

export default FormContact