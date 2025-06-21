'use client'

import React from 'react'
import { useMyContext } from '../theContext'

const Contact = () => {
  const { sections } = useMyContext()

  return (
    <div className="page  ">
      {/* {sections?.map((imgUrl, i) => <img key={i} src={imgUrl?.ImgUrl?.url} alt="000" />)} */}

      <div className="dFlex">
        {sections?.map((imgUrl, i) => <img key={i} src={imgUrl?.ImgUrl?.url} alt="111" />)}
      </div>

      <div className="dFlex">
        {sections?.map((imgUrl, i) => (
          <img key={i} src={`${imgUrl?.ImgUrl?.url.replace('/api', '/')}`} alt="222" />
        ))}
      </div>

      <div className="dFlex">
        {sections?.map((imgUrl, i) => (
          <img
            key={i}
            src={`${imgUrl?.ImgUrl?.url.replace('/api/media/file/', '/media/')}`}
            alt="333"
          />
        ))}
      </div>

      <div className="dFlex">
        {sections?.map((imgUrl, i) => (
          <img
            key={i}
            src={`${imgUrl?.ImgUrl?.url.replace('/api/media/file/', '/../media/')}`}
            alt="444"
          />
        ))}
      </div>

      <h1>Contacts</h1>
    </div>
  )
}

export default Contact
