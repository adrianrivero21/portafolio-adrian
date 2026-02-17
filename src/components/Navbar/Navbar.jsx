import React, {useState} from 'react'
import Logo from '../../assets/icono.png'

const navbarlinks = [
    {
        id:1,
        title:"Inicio",
        to: "/",
    },
    {
        id:2,
        title:"Contacto",
        to: "/contact",
        
    },
    {
        id:3,
        title:"Proyectos",
        to: "/project",
    },
]

const navbarRedes = [
    {
        id:1,
        title:"Github",
        link:"https://github.com/adrianrivero21",
        icon:'bi bi-github'
    },
    {
        id:2,
        title:"Facebook",
        link:"https://www.facebook.com/?locale=es_LA",
        icon:'bi bi-facebook'
    },
    {
        id:3,
        title:"Tiktok",
        link:"https://www.tiktok.com/es/",
        icon:'bi bi-tiktok'
    }
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }




  return (
    <nav className='fixed top-0 left-0 w-full bg-grey bg-opacity-30 backdrop-blur-md z-50'>
        <div className='flex justify-between items-center sm:px-10 px-4 py-4'>

            <div>
                <img src={Logo} className='w-[35px] text-purple'/>
            </div>

            {/*Boton hamburguesa*/}

            <button onClick={toggleMenu} className='md:hidden text-black'>
                <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                >
                {
                    isOpen ? (
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                    ) 
                    : 
                    (
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16 "
                    />
                )}

                    
                    
                    
                </svg>
            </button>

            <div className='hidden md:block'>
                <ul className='flex sm:space-x-50 space-x-4'>
                    {navbarlinks.map((link)=>(
                        <li key={link.id}>
                            <a
                            target='__blank'
                            className='sm:text-lg text-sm hover:text-yellow-200 transition-transform 
                            hover:scale-110 transform inline-block duration-300'
                            href={link.link}>
                            {link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='hidden md:block'>
                <ul className='flex space-x-6'>
                    {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a 
                            target='__blank'
                            rel='noopener noreferrer'
                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                            href={link.link}>

                                <i
                                className={`${link.icon} sm:text-2xl text-lg hover:text-yellow-200 transition-all duration-300 `}
                                >

                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Menu Mobile*/}

            <div className={`md:hidden absolute w-full bg-white-950 transition-all duration-350 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarlinks.map((link)=>(
                        <li key={link.id} className='py-2 text-center'>
                            <a
                            className='hover:text-yellow-200'
                            onClick={()=>setIsOpen(false)}
                            target='__blank'
                            href={link.link}>
                            {link.title}</a>
                        </li>
                    ))}
                </ul>
                <ul className='flex space-x-4 px-4 py-2 border-t justify-center'>
                    {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a 
                            target='__blank'
                            rel='noopener noreferrer'
                            className='inline-block'
                            onClick={()=>setIsOpen(false)}
                            href={link.link}>
                                <i
                                className={`${link.icon} text-lg hover:text-yellow-200`}
                                >

                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

    </nav>
  )
}

export default Navbar