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


export const MenuList = ({ link, name }) => {
    return (
        <ul id='menu-primary'>
            {
                items.map(item =>
                    <MenuItem key={items.indexOf(item)}>
                        <MenuLink link={link} />
                        {name}
                        <MenuLink />
                    </MenuItem>
                )
            }
        </ul>
    )
}

