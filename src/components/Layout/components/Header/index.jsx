import React from 'react'
import { Logo } from './components/Logo'
import { Nav } from './components/Nav'
import './header.scss'

const Header = () => {
    return (
        // <header className={header ? 'header' : 'header-hide'} >
        <header className='header'>
            < Logo />
            < Nav />
        </header >
    )
}

export { Header }