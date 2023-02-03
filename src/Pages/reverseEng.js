import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Reverse/hero'
import Content from '../Comp/Reverse/content'
import { Image } from '../Base/box'
import Collaborate from '../Comp/Home/collaborate'
import Footer from '../Comp/Home/footer'

const ReverseEng = () => {
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

export default ReverseEng