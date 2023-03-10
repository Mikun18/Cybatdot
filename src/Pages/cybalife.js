import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Cybalife/hero'
import Content from '../Comp/Cybalife/content'
import { Image } from '../Base/box'
import Collaborate from '../Comp/Home/collaborate'
import Footer from '../Comp/Home/footer'

const Cybalife = () => {
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

export default Cybalife