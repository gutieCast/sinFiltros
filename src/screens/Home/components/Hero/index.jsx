import React from 'react'
import { ImgHero, TextHero } from './components'
import './hero.scss'

const Hero = () => {
    return (
        <div id="hero">
            < TextHero />
            < ImgHero />
        </div>
    )
}

export { Hero }
