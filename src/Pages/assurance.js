import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Assurance/hero'
import Content from '../Comp/Assurance/content'
import Collaborate from '../Comp/Home/collaborate'
import { Image } from '../Base/box'
import Footer from '../Comp/Home/footer'

const Assurance = () => {
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

export default Assurance