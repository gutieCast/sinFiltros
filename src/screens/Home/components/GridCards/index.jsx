import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../../../components/Card'
import { arrayCards } from './infoCards'
import './GridCards.scss'

const GridCards = () => {
    arrayCards.map(card => console.log(card));
    return (
        <div className="uk-width-max-large uk-flex uk-flex-center uk-flex-wrap uk-flex-wrap-around gridCards" uk-grid uk-height-match="target: > div > .uk-card  .link-card" uk-scrollspy="cls: uk-animation-fade; target: .uk-card  .link-card; delay: 170; repeat: true" uk-grid="parallax: 150">
            {
                arrayCards.map(({ link, title, src, alt, id }) =>
                    <Link to={link} key={title} className="link-card">
                        <Card
                            title={title}
                            src={src}
                            alt={alt}
                            id={id}
                        />
                    </Link>
                )
            }
        </div>
    )
}

export { GridCards }