import React from 'react';
import './burguerToggle.scss';
import { BackgroundMenu } from './components';

const BurguerToggle = ({ children }) => {
    const body = document.querySelector('body');
    const navMobileToggle = (e) => {
        e.preventDefault();
        body.classList.toggle('nav-open');
    }
    return (
        <>
            <div className="menu-button-box">
                <a id="menu-button-toggle" onClick={(e) => navMobileToggle(e)}>
                    <span></span>
                </a>
            </div>
            <BackgroundMenu />
            {children}
        </>
    )
}

export { BurguerToggle }
