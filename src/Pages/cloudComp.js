import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Cloud/hero'
import Content from '../Comp/Cloud/content'
import { Image } from '../Base/box'
import Collaborate from '../Comp/Home/collaborate'
import Footer from '../Comp/Home/footer'

const CloudComp = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Content />
        <div style={{position:"relative"}}>
          <Image src='./Images/Ellipse.png' alt="ellipse" cybalife/>
          <Collaborate />
        </div>
          <Footer />
    </div>
  )
}

export default CloudComp