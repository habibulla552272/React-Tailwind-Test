
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Benefits from './Benefits'
import Our_Courses from './Our_Courses'
import Our_Testimonials from './Our_Testimonials'

const RootlayOut = () => {
  return (
 <>
 <Header />
 <Navbar />
 <Outlet/>
 <Benefits />
 <Our_Courses />
 <Our_Testimonials />
 <Footer />
 </>
  )
}

export default RootlayOut
