import React from 'react';
import './imgHero.scss';
import imgHero from '../../../../../../assets/img/hero-index.png';

export const ImgHero = () => {
    return (
        <div className="uk-background-cover" id="img-main" uk-parallax="bgy: -200">
            <img
                src={imgHero}
                alt=" Illustration. Six teenager friends are together. They looked happy."
                id='img-main'
            // uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
            />
        </div>
    )
}
