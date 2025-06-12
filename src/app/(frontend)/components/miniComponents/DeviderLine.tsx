'use client'
import { useMyContext } from '@/app/(frontend)/theContext'

const DeviderLine = () => {
  const { theme } = useMyContext()

  return (
    <div
      className="deviderLine "
      style={{ height: '1px', backgroundColor: theme.colorMain, margin: '1rem 0' }}
    ></div>
  )
}

export default DeviderLine
