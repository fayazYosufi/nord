'use client'
import Consult from './components/consult'
import Logo from './components/miniComponents/Logo'
import PostFullPageWithBgPhoto from './components/PostFullPageWithBgPhoto'
import { useMyContext } from './theContext'
import { ServicePropsTypes } from '../../types'
import Link from 'next/link'
import { useState } from 'react'

const OurCustomers = () => {
  const { theme, sections } = useMyContext()
  const customerSection = sections[sections.findIndex((customer) => customer.Name == 'customers')]
  const TitleAndDetails: string[] = customerSection?.LongDetails.split('#')

  return (
    <div
      className="bgMain cMain section relative reduceTop overflowH"
      style={{
        // backgroundColor: theme.bgColorMain,
        minHeight: '280px',
        top: '-3rem',
      }}
    >
      <div className="myContainer dFlex mb_flexCol">
        <div className="w30">
          <div className="subTitle">{customerSection?.ShortDetails}</div>
          <div className="title">{customerSection?.Title}</div>
        </div>

        <div
          className="w70"
          // style={{ color: theme.colorAccent }}
        >
          <div className="bold mb1">{TitleAndDetails && TitleAndDetails[0]}</div>
          <ul>
            {TitleAndDetails &&
              TitleAndDetails[1]
                .split('*')
                .map((text: string, i: number) => <li key={i}>{text}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
const RangeOfService = () => {
  const { myServices, isTablet, singlePostData } = useMyContext()
  // console.log(myServices.sort)
  const [limitService, setLimitService] = useState<number>(6)

  return (
    <div className="section  ">
      <div className="titleBar bottomBorder">
        <div className="subTitle">What We Offer</div>
        <div className="title">Our range of services</div>
      </div>

      <div className=" dFlex flexWrap gap2 mb_flexWrapNo mb_ovflS">
        {myServices
          ?.filter((service: ServicePropsTypes) => (service.Sort as number) <= limitService)
          ?.sort((a, b) => (a.Sort as number) - (b.Sort as number))
          ?.map((service: ServicePropsTypes, j: number) => (
            <Link
              href={`/services/${service.Name.replace(/\s+/g, '_')}`}
              // className="bgImage wFill-x  card cardH relative zIndex_-1 mb_wFill reduce7"
              className="relative bgImage bgPos50 mb_wFill"
              style={{
                backgroundImage: `url(${service.ImgURL.url})`,
                width: service.ImgWidthSizeX == 2 ? (isTablet ? '40%' : '48%') : '23%',
              }}
              key={j}
              onClick={() => {
                singlePostData.postName = service.Name
                singlePostData.postImg = service.ImgURL.url
                // singlePostData.serviceDetails=serviceDetails
              }}
            >
              <div
                className="card cardH  zIndex_-1  reduce7"
                // style={{backgroundImage:`url(${service.srvImgURL})`, backgroundPosition:'center', width: service.imgXwidth=='2' ? isTablet ? '40%' :'48%': '23%', }}
              >
                {/* <img className='' src={service.srvImgURL}  alt="" style={{height:'100%'}} /> */}
                <div
                  // href={`/services/${service.serviceName.replace(/\s+/g, '_')}`}
                  className="bgGradiant fsMd bold"
                >
                  <div>{service.Name}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="center">
        <button
          onClick={() => setLimitService((oldValue) => oldValue + 6)}
          className="btn btnPrimary mb_dNone"
        >
          see more
        </button>
      </div>
    </div>
  )
}
const CurrentJobOffers = () => {
  const { theme, jobOffers } = useMyContext()

  return (
    <div className="section">
      <div className="titleBar bottomBorder">
        <div className="subTitle">career</div>
        <div className="title">Current job offers</div>
      </div>

      <div className="dFlex gap1 ptb1" style={{ overflowX: 'scroll' }}>
        {jobOffers?.map((job, i) => (
          <div key={i} className="dFlex flexCol card cardW reduce7 shadowSm bgWhite p1 jcsb alic">
            <div className="dFlex wFill alic jcsb">
              <div className="fs-1_25rem bold cGray">$ {job.Salary || '13.9'} /hr</div>
              <div>
                <button className="btn btnSeccondary">Apply</button>
              </div>
            </div>
            <div
              className="bold title cMain"
              // style={{ color: theme.colorMain }}
            >
              {job.Name}
            </div>
            <div className="dFlex wFill alic jcsb">
              <div className="dFlex gap5">
                <div className="btn-md border">{job.Category}</div>
                <div className="btn-md border">{job.TypeOFEmployment}</div>
              </div>
              <div className="btn-md bgGray hover">More</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const Message = () => {
  const { theme } = useMyContext()

  return (
    <div
      className="p4 dFlex mb_flexCol jcsb reduce-15 bold"
      style={{ backgroundColor: theme.colorPrimary, color: 'white', margin: '3rem 0' }}
    >
      <div className="dGrid" style={{ width: '300px', height: '400px' }}>
        <div className="mb_dFlex gap2 alic">
          <div>
            <i className="fsHuge fa fa-thin fa-envelope fa-2xl"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-14 md:size-24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg> */}
          </div>
          <div className="fsLarge">contact</div>
        </div>
        <p>
          Feel free to send us a few sentences or key points about your concern, and we'll get back
          to you as soon as possible. Alternatively, you can schedule a phone appointment directly
          or simply give us a call.
        </p>
        <Logo />
      </div>

      <div className="dFlex flexEnd" style={{ color: theme.colorMain }}>
        <form
          action="SET"
          className="formMessage dFlex flexCol gap2 w70 p2 mb_wFill  bgWhite mb_bgTrans reduce-15"
        >
          <div>
            <label htmlFor="name">Your name/company*</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Your email*</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Your phone number*</label>
            <input type="number" id="phone" />
          </div>
          <div>
            <label htmlFor="message">Your message*</label>
            <textarea name="" id="message"></textarea>
          </div>
          <div>
            <label htmlFor="service">Which service are you interested in:</label>
            <input type="number" id="service" />
          </div>
          <div>
            <button
              type="submit"
              className="btn btnSeccondary widthFill"
              style={{ margin: '1rem 0', height: '40px' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const ChatIcont = () => {
  const { theme } = useMyContext()

  return (
    <div
      className="cWhite dFlex jcc alic hover mb_dNone"
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        backgroundColor: theme.colorPrimary,
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        zIndex: '1',
      }}
    >
      <i className="fa fa-solid fa-comment-dots fa-2xl"></i>
    </div>
  )
}

const Home = () => {
  const { sections, isMobile } = useMyContext()
  const homeSection = sections[sections.findIndex((section) => section.Name == 'homePage')]

  return (
    <div className="relative-x">
      <ChatIcont />

      <PostFullPageWithBgPhoto
        // postPhotoURL="/api/media/file/homeNew.PNG"
        postPhotoURL={homeSection?.ImgUrl}
        postTitle={homeSection?.Title}
        postShortDetails={homeSection?.ShortDetails}
        buttonText={homeSection?.ButtonText}
        imgFocusTo={isMobile ? 'center' : 'right'}
        imgHeight="100vh"
      />
      <OurCustomers />

      <div className="myContainer">
        <RangeOfService />
        <CurrentJobOffers />
        <Message />
      </div>
      <Consult />
    </div>
  )
}

export default Home
