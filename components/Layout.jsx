import React from 'react'
import Header from './Header'
import MainImage from './MainImage'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Layout = ({ children }) => {
  const [navBg, setNavBg] = useState(false)
  const isHome = children.type === 'Home' ? true : false
  console.log(children.type)
  // const isHome = true // for testing purposes

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
      <div
        style={{
          overflow: 'scroll',
        }}
      >
        {/* <MainImage /> */}
        <Header {...(isHome && navBg ? { backgroundColor: '#0008' } : { backgroundColor: '' })} />
        {children}
      </div>
    </>
  )
}

export default Layout
