import React from 'react'
import ImgReact from '../../assets/react-logo-3d.png'
import ImgJS from '../../assets/js-logo-3d.png'
import ImgNode from '../../assets/node-logo-3d.png'
import ImgTw from '../../assets/tw-logo-3d.png'
import ImgMySql from '../../assets/mysql-logo-3d.png'
import ImgGit from '../../assets/git-logo-3d.png'
import ImgConexion from '../../assets/comunidad-png.png'


const Modul = () => {

  return (

    <div>

      <div className='text-center grid grid-cols-1 lg:grid-cols-12 gap-14 px-10 m-10' style={{ fontSize: '35px'}}>
      
        <card className='lg:col-span-8 bg-gray-100 p-6 py-10 rounded-xl shadow-md'>
        <a className='font-semibold'>Tu producto con las mejores tecnologias</a>
        <p className='font-semibold m-5' style={{ fontSize: '20px', color: '#929292ff'}}>Desde el Frontend al Backend.</p>

        <div className='flex justify-between items-center space-x-3 m-8 w-30 h-50'>
          <img className='' src={ImgReact}/>
          <img className='' src={ImgJS}/>
          <img className='' src={ImgNode}/>
          <img className='' src={ImgTw}/>
          <img className='' src={ImgMySql}/>
          <img className='' src={ImgGit}/>
        </div>
        
        
      </card>
      
      <card className='lg:col-span-4 bg-gray-100 p-6 py-10 rounded-xl shadow-md'>
        <a className='font-semibold '>Crea una comunidad a tu marca</a>
        <p className='font-semibold px-10' style={{ fontSize: '20px', color: '#929292ff'}}>Conecta con tus clientes y crece con tu negocio.</p>

        <a class="m-10 group relative inline-block text-sm font-medium text-white" href="https://www.linkedin.com/in/adrian-josue-rivero-navarro-1a25901b6/">
        <span class="absolute inset-0 border border-red-600"></span>
        <span class=" block border border-red-600 bg-red-600 px-25 py-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
         Empieza Ahora!
         </span>
        </a>
      </card>
      
      </div>

    </div>
  )
}

export default Modul