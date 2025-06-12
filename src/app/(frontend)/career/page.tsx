'use client'

import DeviderLine from '../components/miniComponents/DeviderLine'
import SortFilterSearch from '../components/miniComponents/SortFilterSearch'
import Consult from '../components/consult'
import { useMyContext } from '@/app/(frontend)/theContext'

const Career = () => {
  const { isMobile, theme } = useMyContext()

  const SearchCard = () => {
    return (
      <div className="tb_w70 cPrimary">
        <div className="bgWhite reduce7 p1_25 m1 dGrid gap1">
          <div className="dFlex jcsb alic">
            <div className="titles">SEO NORD GMBH</div>
            <div className="dFlex alic">
              <div className="btn ">
                <i className="fa fa-thin fa-heart fa-2xl"></i>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="block size-7 stroke-[1.5] text-gray-400 md:hidden"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> */}
              </div>
              <button className="btn btnSeccondary mb_dNone bold">Apply</button>
            </div>
          </div>
          <div className="fsMd cMain bold w50">
            SEO Nord GmbH Security guard with expertise according to §34a GeWo
          </div>
          <div className="dFlex gap1">
            <div className="dFlex gap1 alic">
              <i className="fa fa-light fa-briefcase fa-lg"></i>
              <div className="cGray bold">Full time</div>
            </div>
            <div className="dFlex gap1 alic">
              <i className="fa fa-light fa-wallet fa-lg"></i>
              <div className="cGray bold">100$/hour</div>
            </div>
          </div>
          <div className="dFlex jcsb alic">
            <div>
              <i className="fa fa-light fa-location-dot"></i>
              <span className="bold cGray"> Hamburg</span>
            </div>
            <div className="cGray">10 days ago</div>
          </div>
        </div>

        <button className="btn btnSeccondary dNone mb_show wFill p1 bold">Apply</button>
      </div>
    )
  }

  const FilterCheckBox = () => {
    const kateguries = [
      {
        categury: [
          'categury',
          'categury',
          'categury',
          'categury',
          'categury',
          'categury',
          'categury',
          'categury',
        ],
      },
      {
        'Date added': [
          'Last 24 hours',
          'Last 3 days',
          'Last 7 days',
          'Last 14 days',
          'Last month',
          'Anytime',
        ],
      },
      { Location: ['Hamburg', 'Berlin', 'Hamburg', 'Berlin'] },
      {
        'Type of Payment': [
          'Part-time',
          'Full-time',
          'Temporary',
          'Part-time',
          'Full-time',
          'Temporary',
        ],
      },
    ]

    return (
      <div className="bgWhite reduce7 p2 mb_dNone" style={{ minHeight: '900px', width: '25%' }}>
        {kateguries.map((kategury, i) => (
          <div key={i}>
            <div className="title" style={{ fontSize: '1rem' }}>
              {Object.keys(kategury)}
            </div>
            {Object.values(kateguries[i])[0].map((element: string, j: number) => (
              <div key={j} className=" dFlex alic gap5">
                <input type="checkbox" style={{ width: '20px', height: '25px' }} />
                <div className="dds">{element}</div>
              </div>
            ))}
          </div>
        ))}
        <button
          className="btn "
          style={{
            color: theme.colorPrimary,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colorPrimary}`,
          }}
        >
          Apply
        </button>
      </div>
    )
  }

  const pagesNumbers: number[] = [1, 2, 3, 4, 5]

  return (
    <div>
      <div className="myContainer tb_container overflowH ptb4">
        <div className="sss">
          <div className="titleLarge">Job offers</div>
          <div className="pb2">
            ❞Discover exciting job opportunities and start your career with us!❝
          </div>
          <DeviderLine />
        </div>
        <SortFilterSearch
          isSort={false}
          sortText=""
          isFilter={!isMobile}
          filterText="sort by :"
          isSearch={true}
          searchPlaceholder=""
          searchBtnText="Job search service"
        />

        <div className="dFlex gap2 tb_gp1 mtb1 mb_flexCol">
          <FilterCheckBox />

          <div className="wFill">
            {/* <div className="wFill" style={{ position: 'sticky', top: '200px' }}> */}
            <div className="dFlex jcsb alic mb_flexCol tb_dGrid">
              <div className="cGray bold dFlex w70 mb_ovflS">
                <button className="btn border">cataguray X</button>
                <button className="btn border">Last month X</button>
                <button className="btn border">Full-time X</button>
                <button className="btn border">Full-time X</button>
              </div>

              <div className="bold dFlex jcsb w30 p1">
                <div className="dNone mb_show">
                  <i className="fa fa-light fa-arrow-down-wide-short fa-lg"></i>
                </div>
                <div className="wFill taR">2 jobs found</div>
              </div>
            </div>

            <SearchCard />
            <SearchCard />

            <div className="taR">
              <div className="cGray taR fs15 bold p1 dFlex jcc gap1 w30 right">
                <div>{`<`}</div>
                {pagesNumbers.map((pNumber: number, i: number) => (
                  <button className="noBorder" key={i}>
                    0{pNumber}
                  </button>
                ))}
                <div>{`>`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Consult />
    </div>
  )
}

export default Career
