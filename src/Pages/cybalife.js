import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Cybalife/hero'
import Content from '../Comp/Cybalife/content'
import Collaborate from '../Comp/Home/collaborate'

const Cybalife = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Content />
        <div>
          <img src='./Images/Ellipse.png' alt="ellipse" style={{position:"absolute", width:"100%", zIndex:"-1"}}/>
          <Collaborate style={{position:"relative"}}/>
        </div>
    </div>
  )
}

export default Cybalife