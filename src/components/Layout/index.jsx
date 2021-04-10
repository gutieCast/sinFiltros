import React from 'react'
import { Header, Main, Hero, Footer } from './components'


export const Layout = ({ children, img, text }) => {

    return (
        <>
            < Header />
            <Main>
                <Hero img={img} text={text} />
                {children}
            </ Main>
            < Footer />
        </>
    )
}

