import React from 'react'
import Navbar from '../Comp/Home/navbar'
import Hero from '../Comp/Blog/hero'
import SearchNav from '../Comp/Blog/search'
import BlogPost from '../Comp/Blog/blogPost'
import NextPrev from '../Comp/Blog/nextPrev'

const Blog = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SearchNav />
        <BlogPost />
        <NextPrev />
    </div>
  )
}

export default Blog