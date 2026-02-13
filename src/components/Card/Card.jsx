import React from 'react'
import Img from '../../assets/img-app-3.png'
import ImgLap from '../../assets/app-laptop-2.png'



const Card = () => {

   

  return (
    <section >

        <div className='text-center m-4 sm:m-6 lg:mx-80 lg:my-15 '>

            <h1 className='font-semibold grid-cols-1' style={{ fontSize: '50px'}}> 
                Convierte tu idea en realidad ya
            </h1>
            <a className='text-3xl font-semibold mt-4' style={{ color: '#929292ff'}}>
                Estoy en constante aprendizaje a las nuevas tecnologias para implementar las mejores herramientas para tu idea.
            </a>

        </div>

        <div className='text-center grid grid-cols-1 lg:grid-cols-12 gap-14 px-10 m-10' style={{ fontSize: '35px'}}>

          <card className='lg:col-span-4 bg-gray-100 p-6 py-10 rounded-xl shadow-md'>
             <a className='font-semibold'>Tu proyecto donde lo quieras</a>
             <p className='font-semibold' style={{ fontSize: '20px', color: '#929292ff'}}>Tu idea a la mano de todo usuario, ahora conectara tu idea donde sea.</p>
             <img src={Img}/>
          </card>

          <card className='lg:col-span-8 bg-gray-100 p-6 py-10 rounded-xl shadow-md'>
            <a className='font-semibold'>Optimizado y con el mejor diseño</a>
            <p className='font-semibold px-20' style={{ fontSize: '20px', color: '#929292ff'}}>Un avance en tu negocio donde podras tener control total donde tendras un alcanze 24/7.</p>
            <img src={ImgLap}/>
          </card>

        </div>
        
  
    
  


    </section>
  )
}

export default Card