import React from 'react'
import './menuList.scss';
import { MenuItem } from '../MenuItem'
import { MenuLink } from '../MenuLink'

const items = [
    { name: 'Acerca de', link: '/acerca-de' },
    { name: 'Educadores', link: '/educadores' },
    { name: 'Padres', link: '/padres' },
    { name: 'Multimedia', link: '/multimedia' },
    { name: 'Colabora', link: '/colabora' }
]


export const MenuList = () => {
    return (
        <ul id='menu-primary'>
            {
                items.map(({ link, name }) =>
                    <MenuItem key={name} keyId={name + "1"}>
                        <MenuLink styleName="uk-animation-slide-left-small menu-link" link={link} linkName={name} />
                    </MenuItem>
                )
            }
        </ul>
    )
}

