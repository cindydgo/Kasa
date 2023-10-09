import React from 'react'
import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

function Header() {
    let location = useLocation()
    
    return (
        <nav className='header-nav'>
            <img src={Logo} alt="logo Kasa"/>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className={location.pathname === "/about" ? "active" : ""}
                    >
                        A Propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header