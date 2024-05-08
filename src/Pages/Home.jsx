import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import LeftNav from '../components/LeftNav'
import RightNav from '../components/RightNav'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
   <Navbar/>
   <div className='flex w-full '>
    <RightNav/>
   <div className='flex flex-col '>
   <HomePage/>
   <AboutUs/>
   </div>
   <LeftNav/>
   </div>
   <Footer/>
   </>
  )
}

export default Home
