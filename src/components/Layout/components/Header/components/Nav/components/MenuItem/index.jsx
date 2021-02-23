import React from 'react'
import './menuItem.scss'

export const MenuItem = ({ children, key }) => {
    return (
        <li key={key} className='menu-item'>
            {children}
        </li>
    )
}
