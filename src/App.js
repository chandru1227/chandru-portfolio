import React from 'react'
import Navbar from './components/Navbar'
import  {Home}  from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Social/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App