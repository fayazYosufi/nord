'use client'
import React from 'react'
import { useMyContext } from '../theContext'
import Image from 'next/image'

interface ComponentProps {
  classes?: string
  topTitle?: string
  LeftComponent: React.ReactElement
  imgSrc?: { [key: string]: string }
  lefText?: string
  RightComponent: React.ReactElement
  rightText?: string
  rightTitle?: string
  leftWidth: number
  deviderLine: boolean
}

const Component30_70: React.FC<ComponentProps> = ({
  classes,
  topTitle,
  imgSrc,
  lefText,
  LeftComponent,
  rightText,
  rightTitle,
  RightComponent,
  leftWidth,
  deviderLine,
}) => {
  const { theme, isMobile } = useMyContext()

  return (
    <div
      className={`${classes} 
      `}
      style={{
        // backgroundColor: bgColor ? bgColor : theme.bgColorMain,
        minHeight: '300px',
        // position: beTop ? 'relative' : 'inherit',
        // top: beTop ? '-50px' : '0',
      }}
    >
      <div className="section  myContainer dFlex flexCol" style={{ paddingTop: '4rem' }}>
        {topTitle && <div className="titleMd">{topTitle}</div>}

        <div className="dFlex mb_flexCol mb1">
          {/* // className={ ${leftWidth > 20 && 'w30' || leftWidth>48 && 'w50'}} */}
          <div
            className={`${imgSrc && 'ratio-12_8'} reduce-15 overflowH ${lefText && 'titleLarge'}`}
            style={{
              width: leftWidth ? (!isMobile ? `${leftWidth}%` : '100%') : '30%',
              // color: lefText ? theme.colorPrimary : '',
            }}
          >
            {imgSrc ? (
              <Image src={imgSrc.url} alt="img" className="imgCenter wFill h100 reduce-15" />
            ) : (
              lefText || LeftComponent
            )}
          </div>

          <div
            className="w70 pside2 mb_p1"
            // style={
            //   {
            //     // width:leftWidth ? `${100-leftWidth}%` : '69%',
            //     // color: theme.colorAccent,
            //   }
            // }
          >
            {rightTitle && <div className="titleMd ">{rightTitle}</div>}
            {rightText
              ? rightText.split('@')?.map((text, i) => (
                  <p className="fs-1_25rem fw500" key={i}>
                    {text}
                  </p>
                )) || <p>{rightText}</p>
              : RightComponent}
          </div>
        </div>
      </div>
      {deviderLine && (
        <div
          className="deviderLine "
          style={{
            height: '2px',
            width: '90%',
            backgroundColor: theme.colorMain,
            margin: '1rem auto',
          }}
        ></div>
      )}
    </div>
  )
}

export default Component30_70
