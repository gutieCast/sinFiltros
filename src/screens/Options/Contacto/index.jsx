import React from 'react'
import { Layout } from '../../../components/Layout'
import './contacto.scss'

const Contacto = () => {
    const handleSubmit = () => {
        window.location.reload()
    }

    return (
        <Layout namePage="Contacto">
            <section className="section-page">
                <form className="formMail">
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend title">Escríbenos</legend>

                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Tu nombre" />
                        </div>

                        <div className="uk-margin">
                            <input className="uk-input" type="mail" placeholder="Tu correo" />
                        </div>

                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Asunto" />
                        </div>

                        <div className="uk-margin">
                            <textarea className="uk-textarea" rows="5" placeholder="Mensaje"></textarea>
                        </div>

                        <span>
                            <button onClick={(e) => handleSubmit(e)} className="uk-button uk-button-primary button" type="button">Enviar</button>
                        </span>

                        <p className="title">
                            ¡Recuerda seguirnos por nuestras redes sociales!
                        </p>
                    </fieldset>
                </form>
            </section>
            {/* <section className="section-page"> */}
            {/* <ul className="icons-social-network">
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
                </ul> */}
            {/* </section> */}

        </Layout>
    )
}

export { Contacto }
