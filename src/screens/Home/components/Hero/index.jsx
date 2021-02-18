import React from 'react'
import { ImgHero } from './components'
import './hero.scss'

const Hero = () => {
    return (
        <div id="hero">
            < ImgHero />
            <h1 id="text-hero">
                Educación <br /> sexual <br /> integral <br />sin culpas <br />
                ni vergüenza
            </h1>
        </div>
    )
}

export { Hero }
