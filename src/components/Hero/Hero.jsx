import React from 'react'
import Img from '../../assets/imagen_circular_recortada.png'

const Hero = () => {
  return (
    <section className='mt-36'>

      <div className='grid grid-cols-1 md:grid-cols-2'> 

        <div className='px-4'>

          <p className="fw-bold py-4 px-4" style={{ fontSize: '80px', color: '#ff4848ff' }}
>

            Hello World, mi nombre es Adrian.
          </p>

          <p className="fw-bold py-15 px-4" style={{ fontSize: '18px'}}>
            Soy un joven apasionado por la tecnología y el arte por eso me desempeño muy fácilmente
            como Frontend Developer llevando el desarrollo web a una pasión que disfruto con cada desafío
            o proyecto que tenga en mi responsabilidad.
          </p>

        </div>


        <div>

          <img className='py-10 px-35' src={Img}/>

        </div>

      </div>


      

    </section>
  )
}

export default Hero