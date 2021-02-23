import React from 'react'
import './footer.scss'

export const Footer = () => {
    return (
        <footer className="main-footer">
            <section className="links-social-networks">
                <ul className="icons-footer">
                    <li key='sn1' className="item-social-network">
                        <a href="https://www.instagram.com/sinfiltrosorg/">
                            <img class="icon" src="img/icons/Instagram_50px.png" />
                        </a>
                    </li>
                    <li key='sn2' className="item-social-network">
                        <a href="https://www.facebook.com/Sinfiltrosorg-105072891493026">
                            <img class="icon" src="img/icons/Facebook F_48px.png" />
                        </a>
                    </li>
                    <li key='sn3' class="item-social-network">
                        <a href="#">
                            <img class="icon" src="img/icons/Play Button_50px.png" />
                        </a>
                    </li>
                    <li key='sn4' class="item-social-network">
                        <a href="https://twitter.com/sinfiltrosorg">
                            <img class="icon" src="img/icons/Twitter_48px.png" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className="nav-footer">
                <ul className="list-footer">
                    <li key='contact' className="item-footer">
                        <a className="link-footer" href="#">
                            Contacto
                        </a>
                    </li>
                    <li key='privacity' className="item-footer">
                        <a className="link-footer" href="#">
                            Privacidad
                        </a>
                    </li>
                    <li key='mediaKit' className="item-footer">
                        <a className="link-footer" href="#">
                            Media Kit
                        </a>
                    </li>
                    <li key='donations' className="item-footer">
                        <a className="link-footer" href="#">
                            Donaciones
                        </a>
                    </li>
                </ul>
            </section>
            <footer className="footer-footer">
                <span className="footer-text">© Copyright
                    <a className="link-footer" href="https://colectivaimaginaria.weebly.com/"> colectiva imaginaria </a>
                    2020
                </span>
            </footer>
        </footer>
    )
}
