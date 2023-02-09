import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Mobile/hero'
import Content from '../Comp/Mobile/content'
import Collaborate from '../Comp/Home/collaborate'
import { Image } from '../Base/box'
import Footer from '../Comp/Home/footer'

const Mobile = () => {
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

export default Mobile