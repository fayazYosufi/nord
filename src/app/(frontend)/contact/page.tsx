'use client'

import React from 'react'
import { useMyContext } from '../theContext'

const Contact = () => {
  const { sections } = useMyContext()

  return (
    <div className="page dFlex ">
      {/* {sections?.map((imgUrl, i) => <img key={i} src={imgUrl?.ImgUrl?.url} alt="000" />)} */}

      {sections?.map((imgUrl, i) => <img key={i} src={imgUrl?.ImgUrl?.url} alt="111" />)}

      {sections?.map((imgUrl, i) => (
        <img key={i} src={`${imgUrl?.ImgUrl?.url.replace('/api', '/')}`} alt="222" />
      ))}

      {sections?.map((imgUrl, i) => (
        <img
          key={i}
          src={`${imgUrl?.ImgUrl?.url.replace('/api/media/file/', '/media/')}`}
          alt="333"
        />
      ))}

      {sections?.map((imgUrl, i) => (
        <img
          key={i}
          src={`${imgUrl?.ImgUrl?.url.replace('/api/media/file/', '/../media/')}`}
          alt="444"
        />
      ))}

      <h1>Contacts</h1>
    </div>
  )
}

export default Contact
