import React, { useState } from 'react'
import { useScroll } from '../../../../hooks/useScroll'
import { Logo } from './components/Logo'
import { Nav } from './components/Nav'
import './header.scss'

const Header = () => {

    const { scrollDirection } = useScroll();

    const [header, setheader] = useState(true);

    const handleScroll = () => {
        if (scrollDirection === "down") {
            setheader(false)
        }
        if (scrollDirection === "up") {
            setheader(true)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return (
        // <header className={header ? 'header' : 'header-hide'} >
        <header className='header'>
            < Logo />
            < Nav />
        </header >
    )
}

export { Header }