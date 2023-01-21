import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Home/hero'
import Industries from '../Comp/Home/Industries/industries.jsx'
import Expertise from '../Comp/Home/Expertise/expertise.jsx'
import Newsletter from '../Comp/Home/Newsletter/newsletter.jsx'
import Collaborate from '../Comp/Home/collaborate'
import Footer from '../Comp/Home/footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Industries />
        <Expertise />
        <Newsletter />
        <Collaborate />
        <Footer />
    </div>
  )
}

export default Home