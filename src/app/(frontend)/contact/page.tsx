'use client'

import React from 'react'
import { useMyContext } from '../theContext'
// import path from 'path'

const Contact = () => {
  const { sections } = useMyContext()
  console.log(sections[0]?.ImgUrl?.url)
  // const apiURL = 'https://localhost:3000'
  // const apiURL = 'https://nord-bay.vercel.app/api'

  return (
    <div className="page">
      {/* {sections?.map((imgUrl, i) => <img key={i} src={imgUrl?.ImgUrl?.url} alt="000" />)} */}

      {/* {sections?.map((imgUrl, i) => (
        <img key={i} src={`/${imgUrl?.ImgUrl?.url.replace('/api/media/file/', '')}`} alt="111" />
      ))} */}

      {sections?.map((imgUrl, i) => (
        <img
          key={i}
          src={`${imgUrl?.ImgUrl?.url.replace('/api/media/file/', '/media')}`}
          alt="111"
        />
      ))}

      <h1>Contacts</h1>
    </div>
  )
}

export default Contact
