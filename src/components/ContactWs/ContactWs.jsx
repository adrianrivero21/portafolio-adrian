import React from 'react'
import ImgWs from '../../assets/icon-ws.png'

function ContactWs() {
  return (
    <div className='grid grid-cols-1 text-center sm:m-20 lg:mx-50 lg:my-20 shadow-md bg-gray-100'>

      <img className='' src={ImgWs}/>

      <div className='justify-center'>

      <h1 className='font-semibold' style={{ fontSize : '30px' }}>Whatsapp</h1>

      <p className=''>Atencion de Lunes a Viernes de 8:00 am a 6:00 pm en Horario Mexico</p>

      </div>

    </div>
  )
}

export default ContactWs