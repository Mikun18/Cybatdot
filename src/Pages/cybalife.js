import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Cybalife/hero'
import Content from '../Comp/Cybalife/content'
import Collaborate from '../Comp/Home/collaborate'
import Footer from '../Comp/Home/footer'

const Cybalife = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Content />
        <div style={{position:"relative"}}>
          <img src='./Images/Ellipse.png' alt="ellipse" style={{position:"absolute", width:"100%", zIndex:"-1", top:"-100px"}}/>
          <Collaborate />
        </div>
        <Footer />
    </div>
  )
}

export default Cybalife