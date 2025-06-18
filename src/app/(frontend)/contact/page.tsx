'use client'

import React from 'react'
import { useMyContext } from '../theContext'

const Contact = () => {
  const { apiURL } = useMyContext()
  return (
    <div className="page">
      <img src="/media/contact.PNG" alt="img" />
      <img src="./media/contact.PNG" alt="img" />
      <img src="../media/contact.PNG" alt="img" />
      <img src="../../media/contact.PNG" alt="img" />
      <img src="../../../media/contact.PNG" alt="img" />
      <img src="../../../../media/contact.PNG" alt="img" />
      <img src="../../../../../media/contact.PNG" alt="img" />

      <img src={`${apiURL.replace('/api', '')}/media/contact.PNG`} alt="img" />
      <img src={`${apiURL.replace('/api', '')}/media/file/contact.PNG`} alt="img" />

      <img src={`${apiURL}/media/file/contact.PNG`} alt="img" />
      <img src={`${apiURL}/media/contact.PNG`} alt="img" />

      <h1>Contacts</h1>
    </div>
  )
}

export default Contact
