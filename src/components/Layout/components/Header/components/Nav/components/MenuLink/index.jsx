import React from 'react';
import { NavLink } from 'react-router-dom';
import './menuLink.scss';

const MenuLink = ({ link, name }) => {
    return (
        <NavLink className='menu-link' to={link}>
            {name}
        </NavLink>
    )
}

export { MenuLink }