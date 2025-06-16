'use client'
import React from 'react'
import DeviderLine from '../components/miniComponents/DeviderLine'
import { useMyContext } from '../theContext'
import Consult from '../components/consult'
import SortFilterSearch from '../components/miniComponents/SortFilterSearch'
import { ServicePropsTypes } from '../../../types'
import Link from 'next/link'
// import Image from 'next/image'

const Services = () => {
  const { myServices, singlePostData, loading, error } = useMyContext()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const Card_service: React.FC<ServicePropsTypes> = ({ Name, Category, ImgURL }) => {
    return (
      <div className="card dFlex flexCol bgWhite p1 reduce-15 col3" style={{ minHeight: '450px' }}>
        <div>
          <img src={ImgURL.url} alt="" height={250} className="reduce-15" />
        </div>
        <div className="title">{Name}</div>
        <div className="dFlex jcsb mtAuto alic">
          <div className="cGray">{Category}</div>
          <div>
            <Link
              href={`/services/${Name.replace(/\s+/g, '_')}`}
              onClick={() => {
                singlePostData.postName = Name
                singlePostData.postImg = Name
                // singlePostData.serviceDetails=serviceDetails
              }}
            >
              <button className="btn btnPrimary">More</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ssssss">
      <div className="containerFullWidth ptb6">
        <div>
          <div className="titleLarge">Services</div>
          <DeviderLine />
        </div>
        <SortFilterSearch
          isSort={true}
          sortText=""
          isFilter={true}
          filterText=""
          isSearch={true}
          searchPlaceholder=""
          searchBtnText="Search for Service"
        />

        <div className="dFlex flexWrap gap1">
          {myServices
            ?.filter((srv) => srv.Sort != 8)
            ?.sort((a): number => a.id as number)
            ?.map((service: ServicePropsTypes, i: number) => (
              <Card_service
                key={i}
                Name={service.Name}
                Category={service.Category}
                ImgURL={service.ImgURL}
              />
            ))}
        </div>
      </div>
      <Consult />
    </div>
  )
}

export default Services
