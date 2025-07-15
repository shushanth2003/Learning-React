import React from 'react'
import Home from './Components/Home'
import About from './Components/about'
import Content from './Components/content'
const Navbar = () => {
  return (
    <div className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/content">Content</a>
    </div>
  )
}

export default Navbar
