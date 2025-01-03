import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Ourstory from './components/Ourstory'
import Partytime from './components/Partytime'
import Gallery from './components/Gallery'
import Advisor from './components/Advisor'
import Contact from './components/Contact'
import Activities from './components/Activities'

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/story' element={<Ourstory/>}/>
        <Route path='/party' element={<Partytime/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/advisor' element={<Advisor />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App