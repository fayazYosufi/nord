'use client'

import React from 'react'
import PostFullPageWithBgPhoto from '../components/PostFullPageWithBgPhoto'
import Component30_70 from '../components/component30_70'
import { useMyContext } from '../theContext'

function Pursue() {
  const { sections } = useMyContext()
  const purseSection = sections[sections.findIndex((sec) => sec.Name == 'pursue')]
  const directorSection = sections[sections.findIndex((sec) => sec.Name == 'director')]
  const activitiesSection = sections[sections.findIndex((sec) => sec.Name == 'activities')]
  return (
    <div>
      <PostFullPageWithBgPhoto
        postPhotoURL={purseSection?.ImgUrl}
        postTitle={purseSection?.Title}
        postShortDetails={purseSection?.ShortDetails}
        buttonText=""
        imgFocusTo="83%"
        imgHeight=""
      />

      <Component30_70
        classes="bgMain beTop reduceTop"
        topTitle={directorSection?.Title}
        rightText={directorSection?.LongDetails}
        leftWidth={30}
        imgSrc={directorSection?.ImgUrl}
        lefText=""
        LeftComponent=<div></div>
        RightComponent=<div></div>
        rightTitle=""
        deviderLine={false}
      />

      <Component30_70
        classes="bgWhite reduceTop"
        rightTitle={activitiesSection?.Title}
        rightText={activitiesSection?.ShortDetails}
        leftWidth={30}
        imgSrc={activitiesSection?.ImgUrl}
        topTitle=""
        lefText=""
        LeftComponent=<div></div>
        RightComponent=<div></div>
        deviderLine={false}
      />
    </div>
  )
}

export default Pursue
