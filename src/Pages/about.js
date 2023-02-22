import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/About/hero.jsx'
import Story from '../Comp/About/story'
import Innovative from '../Comp/About/innovative'
import Collaborate from '../Comp/Home/collaborate'
import { Image } from '../Base/box'
import Footer from '../Comp/Home/footer'

const About = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Story />
        <Innovative />
        <div style={{position:"relative"}}>
          <Image src='./Images/Ellipse.png' alt="ellipse" cybalife/>
          <Collaborate />
        </div>
        <Footer />
    </div>
  )
}

export default About