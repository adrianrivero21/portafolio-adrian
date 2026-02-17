import { useState } from 'react'
import "./index.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Text from './components/Text/Text'
import Modul from "./components/Modul/Modul"

function App() {
  

  return (
    <>
      <div>

        <Navbar />
        <Hero />
        <Text />
        <Modul />
        <Footer />
        
        
      </div>
       
    </>
  )
}

export default App
