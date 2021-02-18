import React from 'react'
import './nav.scss';
import { MenuList } from './components/MenuList'
import { BurguerToggle } from './components'

const Nav = () => {
    return (
        <nav id="menu-navegation">
            { window.innerWidth > 768
                ? <MenuList />
                : <BurguerToggle>
                    <MenuList />
                </BurguerToggle>
            }
        </nav>
    )
}

export { Nav }