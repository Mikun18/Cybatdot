import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Blog/hero'
import SearchNav from '../Comp/Blog/search'
import BlogPost from '../Comp/Blog/blogPost'
import NextPrev from '../Comp/Blog/nextPrev'
import Footer from '../Comp/Home/footer'

const Blog = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SearchNav />
        <BlogPost />
        <NextPrev />
        <Footer />
    </div>
  )
}

export default Blog