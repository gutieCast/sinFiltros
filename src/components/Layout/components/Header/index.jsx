import React from 'react'
import './header.scss'
import { Logo } from './components/Logo'
import { Nav } from './components/Nav'

const Header = () => {
    return (
        <header id='header'>
            < Logo />
            < Nav />
        </header>
    )
}

export { Header }