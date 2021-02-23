import React from 'react';
import { Link } from 'react-router-dom';
import './menuLink.scss';

const MenuLink = ({ link, linkName }) => {
    return (
        <Link className='menu-link' to={link}>
            {linkName}
        </Link>
    )
}

export { MenuLink }