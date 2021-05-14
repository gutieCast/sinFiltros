import React from 'react'
import { Header, Main, Hero, Footer } from './components'
// import { useScroll } from '../../hooks/useScroll'
import './layout.scss'


export const Layout = ({ children, img, text, namePage, showHero }) => {
    return (
        <>
            <Header />
            <Main namePage={namePage}>
                {
                    showHero &&
                    <Hero img={img} text={text} showHero={showHero} />
                }
                {children}
            </ Main>
            < Footer />
        </>
    )
}

