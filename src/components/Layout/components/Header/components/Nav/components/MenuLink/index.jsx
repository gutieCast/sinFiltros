import React from 'react';
import { Link } from 'react-router-dom';
import './menuLink.scss';

const MenuLink = ({ link, linkName, styleName }) => {
    return (
        <Link className={styleName} to={link}>
            {linkName}
        </Link>
    )
}

export { MenuLink }