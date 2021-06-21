import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../Card'
import './GridCards.scss'

const GridCards = ({ array }) => {
    return (
        <div className="grid-container">
            <ul className="uk-flex uk-flex-center uk-flex-wrap uk-flex-wrap-around gridCards" uk-height-match="target: > div > .uk-card  .link-card" uk-scrollspy="cls: uk-animation-fade; target: .uk-card  .link-card; delay: 170; repeat: true" uk-grid="parallax: 110">
                {
                    array.map(({ link, title, src, alt, id }) =>
                        <li>
                            <Link to={link} key={id} className="link-card">
                                <Card
                                    title={title}
                                    src={src}
                                    alt={alt}
                                    id={id}
                                />
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export { GridCards }