import React from 'react'
import './menuItem.scss'

export const MenuItem = ({ children, keyId }) => {
    const body = document.querySelector('body');
    const handleClick = (e) => {
        e.preventDefault();
        body.classList.toggle('nav-open');
    }
    return (
        <li className="uk-animation-slide-left-medium uk-animation-toggle menu-item" key={keyId} onClick={(e) => handleClick(e)}>
            {children}
        </li>
    )
}
