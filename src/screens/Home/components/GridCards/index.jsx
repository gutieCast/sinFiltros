import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../../../components/Card'
import { arrayCards } from './infoCards'

const GridCards = () => {
    return (
        <div className="uk-width-auto@m uk-flex uk-flex-center uk-flex-wrap uk-flex-wrap-around gridCards" uk-grid uk-height-match="target: > div > .uk-card" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true" uk-grid="parallax: 150">
            {
                arrayCards.map(({ link, title, src, alt, id }) =>
                    <Link to={link} key={title}>
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