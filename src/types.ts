export interface MyContextType {
  sections: SectionsType[]
  myServices: ServicePropsTypes[]
  jobOffers: JobOffersType[]
  isMobile: boolean
  theme: Theme
  isTablet: boolean
  singlePostData: postPropsType
  loading: boolean
  error: string | null
}

export interface SectionsType {
  id: number
  Name: string
  Title?: string
  ShortDetails: string
  // LongDetails?: string
  LongDetails: string
  ImgUrl?: { [key: string]: string } // URL or file reference
  ButtonText?: string
  // createdAt: string;
  // updatedAt: string;
}

export interface JobOffersResponseType {
  docs: JobOffersType[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
}
export interface JobOffersType {
  id: number
  Name: string
  Title: string
  Category: string
  TypeOFEmployment: string
  Date: string // ISO date string
  Location: string
  Salary: number // Assuming "Salary/hr" is the salary per hour
  // updatedAt: string
  // createdAt: string
}
export interface ServicesResponseType {
  docs: ServicePropsTypes[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
}
export interface ServicePropsTypes {
  id?: number
  Sort?: number
  Name: string
  Title?: string
  Category: string
  // ImgURL: string // URL of the image
  ImgURL: { [key: string]: string } // URL of the image
  ImgWidthSizeX?: number // Size in pixels
  ShortDetails?: string
  LongDetails?: string
}

export interface postPropsType {
  postName: string
  postTitle: string
  postKtg: string
  postImg: string
  postShortDetails: string
  postLongDetails: string
}

export interface Theme {
  textColor: string
  colorMain: string
  colorAccent: string // Note: corrected capitalization for consistency
  colorPrimary: string
  bgColorMain: string
  bgColorAccent: string
  bgcolorFooter: string
}
