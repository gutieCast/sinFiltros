import React from 'react'
import './card.scss';

const Card = ({ title, src, alt, id }) => {
    return (
        <div className="card-box">
            <div className="uk-height-1-1 card" style={{ backgroundImage: `url(${src})` }} id={id} alt={alt}>
                <p className="title-card">{title}</p>
            </div>
        </div>
    )
}

export { Card }
