import React from 'react';
import './imgHero.scss';
import imgHero from '../../../../../../assets/img/hero-index.png';

export const ImgHero = () => {
    return (
        <div id="img-main">
            <img
                src={imgHero}
                alt=" Illustration. Six teenager friends are together. They looked happy."
                id='img-main'
            />
        </div>
    )
}
