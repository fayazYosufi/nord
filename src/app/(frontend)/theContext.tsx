'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  MyContextType,
  Theme,
  postPropsType,
  // JobOffersResponseType,
  // JobOffersType,
  // ServicePropsTypes,
  // ServicesResponseType,
  // SectionsType,
} from '../../types'
import axios from 'axios'

export const MyContext = createContext<MyContextType | undefined>(undefined)

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const theme: Theme = {
    textColor: '#03346a',
    colorMain: '#00376b',
    colorAccent: 'rgb(37 105 156)',
    colorPrimary: '#0f3ebd',
    bgColorMain: 'rgb(242 242 242)',
    bgColorAccent: '#0f3ebd',
    bgcolorFooter: 'rgb(6 60 111)',
  }
  // const theme : Theme = {colorMain:'#00376b', colorAccent:'rgb(37 105 156)', colorPrimary:'#0f3ebd', bgColorMain:'#282929', bgColorAccent:'#0f3ebd', bgcolorFooter:'rgb(6 60 111)'} // Dark

  const checkWidth = () => {
    if (window.innerWidth <= 440) {
      setIsMobile(true)
      setIsTablet(false)
    } else if (window.innerWidth <= 768) {
      setIsMobile(false)
      setIsTablet(true)
    } else {
      setIsMobile(false)
      setIsTablet(false)
    }
  }

  useEffect(() => {
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => {
      window.removeEventListener('resize', checkWidth)
    }
  }, [])

  const [sections, setSections] = useState([])
  const [myServices, setMyServices] = useState([])
  const [jobOffers, setJobOffers] = useState([])

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // const apiURL = 'http://localhost:3000/api'
  const apiURL = 'https://nord-bay.vercel.app/api'
  useEffect(() => {
    const fetchData = async () => {
      try {
        try {
          const sections_response = await axios.get(`${apiURL}/sections`)
          setSections(sections_response.data.docs)
        } catch (error) {
          setError((error as Error).message)
          console.log(error)
        }
        try {
          const myServices_response = await axios.get(`${apiURL}/services?limit=20`)
          setMyServices(myServices_response.data.docs)
        } catch (error) {
          setError((error as Error).message)
          console.log(error)
        }
        try {
          const jobOffers_response = await axios.get(`${apiURL}/jobOffers`)
          setJobOffers(jobOffers_response.data.docs)
        } catch (error) {
          setError((error as Error).message)
          console.log(error)
        }

        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError((error as Error).message)
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const singlePostData: postPropsType = {
    postName: 'postName',
    postTitle: 'postTitle',
    postKtg: 'postKtg',
    postImg: '/images/services/revier-streifendienste.png',
    postShortDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    postLongDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique quos doloremque, quibusdam culpa repellendus modi eveniet. Debitis, dolor, aut culpa reprehenderit architecto, consequuntur quae nam dignissimos amet excepturi odio sit ipsa! Rem quibusdam et,  harum reiciendis dicta tempora? Aut veniam aperiam dolor corporis animi ea nostrum ipsum repudiandae quae, obcaecati nobis dignissimos enim exercitationem inventore voluptate beatae, reprehenderit in, optio ad iure quasi numquam! Aliquam possimus cupiditate velit, tempore distinctio fugiat totam ipsum enim? Deleniti ullam reiciendis praesentium ratione laboriosam corporis nostrum adipisci nam dolorem perferendis totam, unde eos quos facere ducimus temporibus itaque minima fugit! Eos magnam ad eius accusamus, aut quos ea commodi inventore quidem repellat id qua odio esse, suscipit fuga vitae saepe in necessitatibus, nostrum delectus quis obcaecati, sint odit ipsam reprehenderit repellendus quibusdam.',
  }

  return (
    <MyContext.Provider
      value={{
        sections,
        myServices,
        jobOffers,
        isMobile,
        isTablet,
        theme,
        singlePostData,
        loading,
        error,
        apiURL,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

// Custom hook to use the context

export const useMyContext = () => {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }
  return context
}
