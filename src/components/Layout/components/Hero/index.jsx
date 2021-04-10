import React from 'react'
import './hero.scss'

const Hero = ({ img, text }) => {

    const divHero = {
        backgroundImg: 'url(' + img.url + ')'
    }

    return (
        <div className="uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" id={img.id} style={divHero}>
            < div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" >
                <h2 uk-parallax="opacity: 1, 0; y: 90,1; scale: 0.75,1; viewport: 0.5" id="text-hero">
                    {text}
                </h2>
            </div >
        </div>
    )
}

export { Hero }
