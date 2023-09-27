import React from 'react'
import Service from '../../Components/Services/services'
import Gallery from '../../Components/Gallery/gallery'
import About from '../../Components/About Us/about'
import Home from '../../Components/Home/home'
import Testimonial from '../../Components/Testimonial/testimonial'
import Header from '../../Components/Header/header'

function HomePage() {
  return (
    <div>
        
          <Header/>
         <Home/>
      <Service />
      <About/>
      <Gallery/>
      <Testimonial/>
  
    </div>
  )
}

export default HomePage