'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './miniComponents/Logo'
import DeviderLine from './miniComponents/DeviderLine'
import { useMyContext } from '../theContext'

const Header = () => {
  const { isMobile } = useMyContext()
  const menus = [
    { name: 'Home', path: '' },
    { name: 'Pursue', path: 'pursue' },
    { name: 'Services', path: 'services' },
    { name: 'Career', path: 'career' },
  ]
  const pathLink = usePathname()
  const pathName = pathLink.split('/')[1]

  return (
    <div
      id="Header"
      className="bgWhite zIndex_1"
      style={{ padding: isMobile ? '1rem 3rem' : '1rem 4rem' }}
    >
      <Logo />

      <div
        id="menus"
        className={`${isMobile && 'bgBlur'} menus `}
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
      >
        {menus.map((menu, i) => (
          <Link key={i} href={menu.path == '' ? '/' : `/${menu.path}`}>
            <div
              className={pathName == menu.path ? 'cMain menu activeMenu' : 'menu cMain'}
              onClick={() => {
                const mobileMenu = document.getElementById('menus')
                if (mobileMenu) {
                  mobileMenu.classList.toggle('open')
                }
              }}
            >
              {menu.name}
            </div>
          </Link>
        ))}
        <Link href={'/contact'}>
          <div className="bgColor-main mb_dNone">contact</div>
        </Link>

        <div className="dNone mb_show ">
          <DeviderLine />
          <div className="dFlex flexEnd">
            <button className="btn">Join now</button>
            <button className="btn btnPrimary">Register</button>
          </div>
        </div>
      </div>
      <div
        id="mobileMenu"
        className="dNone mb_dFlex hover"
        onClick={() => {
          const mobileMenu = document.getElementById('menus')
          if (mobileMenu) {
            mobileMenu.classList.toggle('open')
          }
        }}
      >
        <i className="cPrimary fa-solid fa-bars fa-2xl"></i>
      </div>
    </div>
  )
}

export default Header
