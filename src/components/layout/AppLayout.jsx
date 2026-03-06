import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout