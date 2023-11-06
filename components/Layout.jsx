import React from 'react'
import Header from './Header'
import MainImage from './MainImage'

const Layout = ({ children }) => {
  return (
    <>
      <MainImage />
      <Header />
      {children}
    </>
  )
}

export default Layout
