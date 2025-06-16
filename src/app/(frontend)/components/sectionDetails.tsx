import { useMyContext } from '../theContext'
// import DeviderLine from './miniComponents/DeviderLine'

export const SectionDetails: React.FC<{ [key: string]: string }> = ({
  classes,
  // array,
  sectionName,
}) => {
  const { theme, myServices } = useMyContext()
  //   const thisSection = sections[sections.findIndex((customer) => customer.Name == sectionName)]
  const thisSection = myServices[myServices.findIndex((customer) => customer.Name == sectionName)]
  //   const TitleAndDetails: string[] = thisSection?.LongDetails.split('#')
  //   const TitleAndDetails = Array.isArray(thisSection) && thisSection?.LongDetails.split('#')
  const TitleAndDetails =
    // Array.isArray(thisSection) && thisSection.length &&
    thisSection?.LongDetails?.split('#')

  // console.log(TitleAndDetails)

  return (
    <div
      id="postDetails"
      className={`${classes} relative reduceTop overflowH`}
      style={{
        // backgroundColor: theme.bgColorMain,
        minHeight: '280px',
        // top: '-3rem',
      }}
    >
      <div className="section myContainer dFlex mb_flexCol gap3">
        <div className="w30">
          {/* <div className="subTitle">{thisSection?.ShortDetails}</div> */}
          <div className="title m0">{thisSection?.ShortDetails}</div>
        </div>

        <div
          className="w70 fs-1_25rem"
          // style={{ color: theme.textColor }}
        >
          <div className=" mb1">
            {(TitleAndDetails &&
              TitleAndDetails[0].split('@').map(
                (text: string, i: number) =>
                  text && (
                    <p key={i} className="mb2">
                      {text}
                    </p>
                  ),
              )) ||
              (TitleAndDetails && TitleAndDetails[0])}
          </div>
          <ul>
            {TitleAndDetails &&
              TitleAndDetails[1] &&
              // Array.isArray(TitleAndDetails[1]) &&
              // TitleAndDetails[1].length &&
              TitleAndDetails[1]
                .split('*')
                .map((text: string, i: number) => text && <li key={i}>{text}</li>)}
          </ul>
        </div>
      </div>
      <div
        className="deviderLine "
        style={{
          height: '2px',
          width: '90%',
          backgroundColor: theme.colorMain,
          margin: '1rem auto',
        }}
      ></div>
    </div>
  )
}
