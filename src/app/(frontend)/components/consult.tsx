'use client'
import { useMyContext } from '@/app/(frontend)/theContext'
import Image from 'next/image'

const Consult = () => {
  const { isMobile, isTablet, sections } = useMyContext()
  const consultSectioni = sections[sections.findIndex((sec) => sec.Name == 'consult')]
  // const consultSectioni = sections[sections.findIndex((section) => section.Name == 'homePage')]

  return (
    <div className="section bgWhite reduceTop">
      <div className="myContainer tb_container dFlex jcsb mb_flexColRev relative">
        <div
          className={`${(isMobile || isTablet) && 'bgBlueGradiantBottom'} w50 tb_w100 tb_dFlex alFEnd`}
        >
          <div className={`${isMobile || isTablet ? 'fsMd' : 'titleLarge'} w70 bold`}>
            {consultSectioni?.Title}
          </div>
          <div className="epty"></div>
          {consultSectioni?.ButtonText && (
            <button className="btn btnSeccondary">{consultSectioni?.ButtonText}</button>
          )}
        </div>

        <div
          className={`overflowH reduce-5 ${isMobile || isTablet ? 'wFill' : 'w30'}`}
          style={{ height: '350px' }}
        >
          <Image
            src={consultSectioni?.ImgUrl?.url}
            className="reduce-15 objCover"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
export default Consult
