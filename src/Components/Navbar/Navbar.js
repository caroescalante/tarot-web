import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from '../Assets/landing_1.jpg'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    // 👇 Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className='header'>
            <nav className={scrolled ? "navbar active" : "navbar"}>
                <a href='/' className='logo'>
                    {/* <img src={logo} alt='logo' /> */}
                    <span className="logo-text">Home</span>
                </a>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Sobre Mi</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#services' onClick={closeMenu}>Servicios</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar