'use client'

import PostFullPageWithBgPhoto from '@/app/(frontend)/components/PostFullPageWithBgPhoto'
import { useMyContext } from '@/app/(frontend)/theContext'
import Component30_70 from '@/app/(frontend)/components/component30_70'
import Consult from '@/app/(frontend)/components/consult'
import DeviderLine from '@/app/(frontend)/components/miniComponents/DeviderLine'
import { usePathname } from 'next/navigation'
import { SectionDetails } from '../../components/sectionDetails'
import Image from 'next/image'

// export default async function PostDetials({params, }: {params: Promise<{serviceName: string}> }) {
export default function PostDetials() {
  // const serviceName = (await params).serviceName

  const { theme, isMobile, isTablet, myServices } = useMyContext()

  const WhyUs = () => {
    const whyUs = [
      {
        logo: 'https://a.storyblok.com/f/337361/63x61/f2e4a02b72/flexibility.svg',
        title: 'flexibility',
        shortDetails:
          'Our team has many years of experience in the field of personal protection and has carried out numerous successful operations.',
      },
      {
        logo: 'https://a.storyblok.com/f/337361/73x71/1955bd0937/experience.svg',
        title: 'Experience and expertise',
        shortDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis voluptatibus commodi at corrupti et.',
      },
      {
        logo: 'https://a.storyblok.com/f/337361/73x72/cd8048ff8a/customer-satisfaction2.svg',
        title: 'Customer satisfaction',
        shortDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis voluptatibus commodi at corrupti et.',
      },
    ]

    return (
      <div id="whyUs">
        {whyUs.map((item, i) => (
          <div
            key={i}
            className={`dFlex ${isMobile && 'bgWhite p1 reduce7 shadowSm'} gap2 mt1 alic`}
            // style={{ color: theme.colorMain }}
          >
            <div className="icon ">
              <Image src={item.logo} alt="" />
            </div>
            <div className={`${(isMobile || isTablet) && 'w70'}`}>
              <div className="fsMd lineH2">{item.title}</div>
              <p className={`${isMobile && 'fsSm'}`}>{item.shortDetails}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const Services = () => {
    const miniServices = [
      {
        logo: 'https://a.storyblok.com/f/337361/512x512/1ace99137f/individuelle-scherheitsanalysen.svg',
        title: 'Individuelle Sicherheitsanalysen',
        shortDetails:
          'Our team has many years of experience in the field of personal protection and has carried out numerous successful operations.',
      },
      {
        logo: 'https://a.storyblok.com/f/337361/26x24/268135c57b/users.svg',
        title: 'Individual security analyses',
        shortDetails:
          'Our team has many years of experience in the field of personal protection and has carried out numerous successful operations.',
      },
      {
        logo: 'https://www.seo-nord.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F337361%2F512x512%2Fdf1b8987b1%2F24-hours.png&w=32&q=75',
        title: 'Individual security analyses',
        shortDetails:
          'Our team has many years of experience in the field of personal protection and has carried out numerous successful operations.',
      },
      {
        logo: 'https://a.storyblok.com/f/337361/0x0/583d9d277b/ppe_icon_niosh-approved.svg',
        title: 'Individual security analyses',
        shortDetails:
          'Our team has many years of experience in the field of personal protection and has carried out numerous successful operations.',
      },
    ]

    return (
      <div className="cols gap2 tb_gap1">
        {miniServices.map((service, i) => (
          <div
            key={i}
            id="miniServices"
            className={`${isMobile && 'bgWhite reduce7 shadowSm p1 alic taC'} w50 dFlex flexCol gap1`}
          >
            <div className="circle p1 icon" style={{ backgroundColor: theme.colorPrimary }}>
              <Image src={service.logo} alt="" />
            </div>
            <div>
              <div className="fsMd lineH2">{service.title}</div>
              <p>{service.shortDetails}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const UserImage = () => {
    const { sections } = useMyContext()
    const director_section = sections[sections.findIndex((sec) => sec.Name == 'director')]
    // const thisSection = myServices[myServices.findIndex((customer) => customer.Name == sectionName)]

    return (
      <div>
        <Image className="reduce15" src={director_section?.ImgUrl?.url} alt="" />
      </div>
    )
  }

  const UserInfo = () => {
    return (
      <div>
        <div className="title">Your contact person</div>
        <div>
          <div className="fsMd lineH2">Fritz Schramm</div>
          <p>Shareholder, Managing Director</p>
        </div>
        <DeviderLine />
        <div>Email: f.schramm@seo-nord.com</div>
        <div>Phone: (040)20 76 93 22</div>

        <div className="dFlex gap1 mt1 w20" style={{ color: theme.colorMain }}>
          <div>
            <i className="fa fa-brands fa-linkedin fa-2x"></i>
          </div>
          <div>
            <i className="fa fa-brands fa-x-twitter fa-2x"></i>
          </div>
          <div>
            <i className="fa fa-brands fa-facebook fa-2x"></i>
          </div>
          <div>
            <i className="fa fa-brands fa-square-instagram fa-2x"></i>
          </div>
        </div>
      </div>
    )
  }

  const myPath = usePathname()
  const serviceName = myPath.split('/')[2]
  // console.log(serviceName)
  const activeServiceIndex = myServices.findIndex(
    (service) => service.Name.replace(/\s+/g, '_') == serviceName,
  )

  return (
    <div>
      <PostFullPageWithBgPhoto
        postPhotoURL={myServices[activeServiceIndex]?.ImgURL}
        postTitle={myServices[activeServiceIndex]?.Name}
        postShortDetails={myServices[activeServiceIndex]?.Title}
        // postTitle={myServices[activeServiceIndex]?.Title && myServices[activeServiceIndex]?.Title}
        buttonText={'To the offer form'}
        imgFocusTo={'70%'}
        imgHeight="80vh"
      />
      <SectionDetails
        classes="bgMain cMain beTop"
        sectionName={myServices[activeServiceIndex]?.Name}
      />

      <Component30_70
        classes="reduceTop beTop cMain"
        LeftComponent=<div></div>
        RightComponent=<WhyUs />
        topTitle=""
        lefText="Why Us?"
        rightText=""
        rightTitle={''}
        leftWidth={30}
        deviderLine={true}
      />

      <Component30_70
        classes="reduceTop beTop"
        LeftComponent=<div></div>
        RightComponent=<Services />
        topTitle=""
        lefText="Services"
        rightText=""
        rightTitle={''}
        leftWidth={30}
        deviderLine={true}
      />

      <Component30_70
        classes="reduceTop beTop"
        LeftComponent=<UserImage />
        RightComponent=<UserInfo />
        topTitle=""
        lefText=""
        rightText=""
        rightTitle=""
        leftWidth={20}
        deviderLine={false}
      />

      <Consult />
    </div>
  )
}
