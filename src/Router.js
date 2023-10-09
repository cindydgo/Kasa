import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import Accomodation from './pages/Accomodation'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//Header and Footer components are apart of our app layout
function Routers() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path='/logements/:id' element={<Accomodation />} />
                <Route path="*" element={<ErrorPage />}  />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routers