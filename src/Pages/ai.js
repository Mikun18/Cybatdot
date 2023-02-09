import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/AI/hero'
import Content from '../Comp/AI/content'
import Collaborate from '../Comp/Home/collaborate'
import { Image } from '../Base/box'
import Footer from '../Comp/Home/footer'

const AI = () => {
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

export default AI