import React, { useState } from 'react'
import { Header, Main, Hero, Footer } from './components'
// import { useScroll } from '../../hooks/useScroll'
import './layout.scss'


export const Layout = ({ children, img, text, showText }) => {

    // const { scrollDirection } = useScroll();

    // const [Header, setHeader] = useState(true);

    // const handleScroll = () => {
    //     if (scrollDirection === "down") {
    //         setHeader(false)
    //     }
    //     if (scrollDirection === "up") {
    //         setHeader(true)
    //     }
    // }

    // window.addEventListener('scroll', handleScroll)

    return (
        <>
            <Header />
            <Main>
                <Hero img={img} text={text} showText={showText} />
                {children}
            </ Main>
            < Footer />
        </>
    )
}

