import React from 'react'
import './card.scss';

const Card = ({ title, src, alt, id }) => {
    return (
        <div>
            <div className="uk-width-1-4@m uk-padding-remove uk-card uk-card-default uk-card-body card">
                <img src={src} className="background" id={id} alt={alt} />
                <h4 className="uk-card-title">{title}</h4>
            </div>
        </div>
    )
}

export { Card }
