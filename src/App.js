import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from "./pages/About/About"
import Package from './pages/Package/Package'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/package' element={<Package/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default App
