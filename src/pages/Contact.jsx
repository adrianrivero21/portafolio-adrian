import React from 'react'
import FormContact from '../components/FormContact/FormContact'
import Text from '../components/Text/Text'
import ContactWs from '../components/ContactWs/ContactWs'

function Contact() {
  return (
    <div>
      <FormContact />
      <ContactWs />
      <FormContact />
    </div>
  )
}

export default Contact