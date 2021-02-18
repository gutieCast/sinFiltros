import React from 'react'
import './logo.scss';
import LogoWhite from '../../../../../../assets/img/logoB.png';

const Logo = () => {
    return (
        <div className="logo-box">
            <a className="link-logo" href="/">
                <img id="logoSF" src={LogoWhite} alt="sin filtros logo" />
            </a>
        </div>
    )
}

export { Logo }