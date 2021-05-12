import React from 'react'
import { Link } from 'react-router-dom'
import { MenuFooter } from './components/MenuFooter'
import './footer.scss'

const items = [
    { name: 'Contacto', link: '/contacto' },
    { name: 'Privacidad', link: '/privacidad' },
    { name: 'Media Kit', link: '/media-kit' },
    { name: 'Donaciones', link: '/donaciones' },
    { name: 'Social Partners', link: '/social-partners' }
]

export const Footer = () => {
    return (
        <footer className="main-footer">
            <section className="links-social-networks">
                <ul className="icons-footer">
                    <li key='sn1' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <a href="https://www.instagram.com/sinfiltrosorg/" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="instagram" ratio="1.5">
                        </a>
                    </li>
                    <li key='sn2' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <a href="https://www.facebook.com/Sinfiltrosorg-105072891493026" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="facebook" ratio="1.5">
                        </a>
                    </li>
                    <li key='sn3' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <a href="https://www.youtube.com/channel/UCUlaCYWmOMz4lZ9ABzBQMPQ/" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="youtube" ratio="1.5">
                        </a>
                    </li>
                    <li key='sn4' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <a href="https://twitter.com/sinfiltrosorg" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="twitter" ratio="1.5">
                        </a>
                    </li>
                </ul>
            </section>
            <section className="nav-footer">
                <ul className="list-footer">
                    {
                        items.map(({ link, name }) =>
                            <li key={name} className="uk-animation-toggle item-footer" tabIndex="0">
                                <a href={link} className="uk-animation-scale-up link-footer" linkName={name} />
                            </li>
                        )
                    }
                </ul>
            </section>
            <footer className="footer-footer">
                <span className="footer-text">© Copyright
                    <a className="link-footer" href="https://colectivaimaginaria.weebly.com/"> colectiva imaginaria </a>
                    2020-2021
                </span>
            </footer>
        </footer>
    )
}
