import React from 'react'
import Header from './Header'
import MainImage from './MainImage'
import { useState, useEffect } from 'react'

const Layout = ({ children }) => {
  const [navBg, setNavBg] = useState(false)
  // const isHome = props.name === 'Homepage' ? true : false;
  const isHome = true // for testing purposes

  const changeNavBg = (e) => {
    window.scrollY >= 680 ? setNavBg(true) : setNavBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])

  return (
    <>
      <MainImage />
      <Header {...(isHome && navBg ? { backgroundColor: '#0008' } : {})} />
      {children}
    </>
  )
}

export default Layout
