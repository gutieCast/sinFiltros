import React from 'react'
import './menuItem.scss'

export const MenuItem = ({ children, key }) => {
    return (
        <li className="uk-animation-slide-left-medium uk-animation-toggle menu-item">
            {key, children}
        </li>
    )
}
