import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/SecurityTest/hero'
import Content from '../Comp/SecurityTest/content'
import Collaborate from '../Comp/Home/collaborate'
import { Image } from '../Base/box'
import Footer from '../Comp/Home/footer'

const SecurityTest = () => {
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

export default SecurityTest