import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

export const Footer = () => {
    return (
        <footer className="main-footer">
            <section className="links-social-networks">
                <ul className="icons-footer">
                    <li key='sn1' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <Link to="https://www.instagram.com/sinfiltrosorg/" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="instagram" ratio="1.5">
                        </Link>
                    </li>
                    <li key='sn2' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <Link to="https://www.facebook.com/Sinfiltrosorg-105072891493026" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="facebook" ratio="1.5">
                        </Link>
                    </li>
                    <li key='sn3' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <Link to="https://www.youtube.com/channel/UCUlaCYWmOMz4lZ9ABzBQMPQ/" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="youtube" ratio="1.5">
                        </Link>
                    </li>
                    <li key='sn4' className="uk-animation-toggle item-social-network" tabIndex="0">
                        <Link to="https://twitter.com/sinfiltrosorg" className="uk-animation-scale-down uk-icon-link link-sm" uk-icon="twitter" ratio="1.5">
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="nav-footer">
                <ul className="list-footer">
                    <li key='contact' className="uk-animation-toggle item-footer" tabIndex="0">
                        <a className="uk-animation-scale-up link-footer" href="#">
                            Contacto
                        </a>
                    </li>
                    <li key='privacity' className="uk-animation-toggle item-footer" tabIndex="0">
                        <a className="uk-animation-scale-up link-footer" href="#">
                            Privacidad
                        </a>
                    </li>
                    <li key='mediaKit' className="uk-animation-toggle item-footer" tabIndex="0">
                        <a className="uk-animation-scale-up link-footer" href="#">
                            Media Kit
                        </a>
                    </li>
                    <li key='donations' className="uk-animation-toggle item-footer" tabIndex="0">
                        <a className="uk-animation-scale-up link-footer" href="#">
                            Donaciones
                        </a>
                    </li>
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
