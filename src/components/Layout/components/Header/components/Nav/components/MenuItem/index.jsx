import React from 'react'
import './menuItem.scss'

export const MenuItem = ({ children, index }) => {
    return (
        <li key={index} className='menu-item'>
            {children}
        </li>
    )
}
