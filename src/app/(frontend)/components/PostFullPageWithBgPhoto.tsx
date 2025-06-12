'use client'

// import React from 'react'
import { useMyContext } from '../theContext'

interface PostProps {
  // postPhotoURL?: string
  postPhotoURL?: { [key: string]: string }
  postTitle?: string
  postShortDetails?: string
  buttonText?: string
  imgFocusTo: string
  imgHeight: string
}

const PostFullPageWithBgPhoto: React.FC<PostProps> = ({
  postPhotoURL,
  postTitle,
  postShortDetails,
  buttonText,
  imgFocusTo,
  imgHeight,
}) => {
  const { isMobile } = useMyContext()

  return (
    <div
      className="setImgTo_mb bgImage"
      style={{
        height: imgHeight || '80vh',
        backgroundImage: `url(${postPhotoURL?.url})`,
        backgroundPosition: `${imgFocusTo}`,
      }}
    >
      <div
        className={`relative ${isMobile ? 'bgBlueGradiantBottom' : 'bgBlueGradiant'} p3 pb5 dFlex flexCol flexEnd w70`}
      >
        <div className="postContents">
          <div className="fsHuge w70-x bold tb_w80" style={{ margin: '4rem, 1rem' }}>
            {postTitle}
          </div>
          <div className="postDetails tb_w80 fsMd">{postShortDetails}</div>
          {buttonText && (
            <div>
              <button className="btn btnSeccondary bold fs-1_25rem-x">{buttonText}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostFullPageWithBgPhoto
