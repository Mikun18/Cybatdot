import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Security/hero'
import Content from '../Comp/Security/content'
import { Image } from '../Base/box'
import Collaborate from '../Comp/Home/collaborate'
import Footer from '../Comp/Home/footer'

const Security = () => {
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

export default Security