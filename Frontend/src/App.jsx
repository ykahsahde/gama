import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import Courses from './Courses/Courses'
import Contact from './Contact/Contact'
import About from './About/About'
import Signup from './Components/Signup'

function App() {
  return (
    <>

     <div className='dark:bg-gray-900 dark:text-white'>
            <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/courses" element={<Courses />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/signup" element={<Signup />} />

     </Routes>
     </div>
    </>
  )
}

export default App
