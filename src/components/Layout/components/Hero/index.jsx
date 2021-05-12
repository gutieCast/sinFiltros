import React from 'react'
import './hero.scss'

const Hero = ({ img, text, showHero }) => {

    return (
        <>
            {showHero &&
                <div id="hero">
                    <div className="text-content">
                        <h2 uk-parallax="opacity: 1, 0; y: 0, 1; scale: 0.75, 2; viewport: 0.5" id="text-hero">
                            {text}
                        </h2>
                    </div>
                    < div className="uk-background-fixed uk-background-center-center uk-height-large uk-width-1-1" id="img-hero" style={{ backgroundImage: `url(${img.url})` }}>
                    </div >
                </div >
            }
        </>
    )
}

export { Hero }
