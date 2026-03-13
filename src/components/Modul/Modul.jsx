import React from 'react'
import ImgReact from '../../assets/react-logo-3d.png'
import ImgJS from '../../assets/js-logo-3d.png'
import ImgNode from '../../assets/node-logo-3d.png'
import ImgTw from '../../assets/tw-logo-3d.png'
import ImgMySql from '../../assets/mysql-logo-3d.png'
import ImgGit from '../../assets/git-logo-3d.png'


const Modul = () => {

  return (

    <div>

      <div className="text-center grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-10 m-6 sm:m-10 text-[28px] sm:text-[35px]">

        <div className="lg:col-span-8 bg-gray-100 p-6 sm:p-10 rounded-xl shadow-md">

          <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl">

              Tu producto con las mejores tecnologías

          </h2>

         <p className="font-semibold mt-4 text-gray-500 text-base sm:text-lg lg:text-xl">

           Desde el Frontend al Backend.

         </p>

    <div className="flex flex-wrap justify-center items-center gap-6 mt-8">

      <img src={ImgReact} alt="React" className="w-18 h-18 sm:w-25 sm:h-25 lg:w-28 lg:h-28" />
      <img src={ImgJS} alt="JavaScript" className="w-18 h-18 sm:w-25 sm:h-25 lg:w-28 lg:h-28" />
      <img src={ImgNode} alt="Node.js" className="w-18 h-18 sm:w-25 sm:h-25 lg:w-28 lg:h-28" />
      <img src={ImgTw} alt="Tailwind CSS" className="w-18 h-18 sm:w-25 sm:h-25 lg:w-28 lg:h-28" />
      <img src={ImgMySql} alt="MySQL" className="w-18 h-18 sm:w-25 sm:h-25 lg:w-28 lg:h-28" />
      <img src={ImgGit} alt="Git" className="w-18 h-18 sm:w-25 sm:h-25 lg:w-28 lg:h-28" />

    </div>
 
    </div>
    
      
      <card className='lg:col-span-4 bg-gray-100 p-6 py-10 rounded-xl shadow-md'>
        <a className='font-semibold '>Crea una comunidad a tu marca</a>
        <p className='font-semibold px-10' style={{ fontSize: '20px', color: '#929292ff'}}>Conecta con tus clientes y crece con tu negocio.</p>

        <button class="m-8 group relative inline-block text-sm font-medium text-white btn-sm md:btn-md lg:btn-lg" href="https://www.linkedin.com/in/adrian-josue-rivero-navarro-1a25901b6/">
        <span class="absolute inset-0 border border-red-600"></span>
        <span class=" block border border-red-600 bg-red-600 px-14 py-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
         Empieza Ahora!
         </span>
        </button>
        
      



      </card>
      
      
      </div>

    </div>
  )
}

export default Modul