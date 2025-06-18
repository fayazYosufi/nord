'use client'

import React from 'react'
import { useMyContext } from '../theContext'
import path from 'path'

const Contact = () => {
  const { apiURL, sections } = useMyContext()
  console.log(sections)

  return (
    <div className="page">
      {/* <img src="/media/contact.PNG" alt="img" />
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

      <img src={path.join(__dirname, '../../media/contact.PNG')} alt="img" />
      <img src={path.join(__dirname, '../media/contact.PNG')} alt="img" />
      <img src={path.join(__dirname, './media/contact.PNG')} alt="img" />
      <img src={path.join(__dirname, '/media/contact.PNG')} alt="img" /> */}

      {/* {sections?.map((imgUrl:{[key:string]: string}, i) => (
      <img key={i} src={imgUrl} />

      )} */}

      <h1>Contacts</h1>
    </div>
  )
}

export default Contact
