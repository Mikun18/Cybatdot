import React from 'react'
import Navbar from '../Comp/Home/navbar';
import Hero from '../Comp/Blockchain/hero';
import Content from '../Comp/Blockchain/content';
import Footer from '../Comp/Home/footer';
import { Image } from '../Base/box';
import Collaborate from '../Comp/Home/collaborate';

const Blockchain = () => {
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

export default Blockchain