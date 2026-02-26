import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import Courses from './Courses/Courses'
import Contact from './Contact/Contact'
import About from './About/About'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,SetAuthUser] = useAuth()
  console.log(authUser)
   
  return (
    <>

     <div className='dark:bg-gray-900 dark:text-white'>
            <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/courses" element={authUser?<Courses />: <Navigate to="/signup"/>} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/signup" element={<Signup />} />

     </Routes>
     <Toaster />
     </div>
    </>
  )
}

export default App
