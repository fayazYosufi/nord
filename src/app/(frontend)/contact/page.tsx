'use client'

import React from 'react'
import { useMyContext } from '../theContext'
import path from 'path'

const Contact = () => {
  const { sections } = useMyContext()
  console.log(sections[0].ImgUrl?.url)
  const apiURL = 'https://nord-bay.vercel.app/api'
  // const apiURL = 'https://nord-bay.vercel.app/api'

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

      {sections?.map((imgUrl, i) => <img key={i} src={imgUrl.ImgUrl?.url} />)}
      {sections?.map((imgUrl, i) => (
        <img key={i} src={`${apiURL.replace('/api', '')}/${imgUrl.ImgUrl?.url}`} />
      ))}
      {sections?.map((imgUrl, i) => (
        <img key={i} src={apiURL.replace('/api', '') + imgUrl.ImgUrl?.url} />
      ))}

      <h1>Contacts</h1>
    </div>
  )
}

export default Contact
