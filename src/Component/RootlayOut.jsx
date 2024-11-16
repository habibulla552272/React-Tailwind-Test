import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Benefits from './Benefits'
import Our_Courses from './Our_Courses'

const RootlayOut = () => {
  return (
 <>
 <Header />
 <Navbar />
 <Outlet/>
 <Benefits />
 <Our_Courses />
 <Footer />
 </>
  )
}

export default RootlayOut
