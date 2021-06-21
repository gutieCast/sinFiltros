import React from 'react'
import { Layout } from '../../../components/Layout'
import './colaboration.scss'

const Colaboration = () => {
    const handleSubmit = () => {
        window.location.reload()
    }
    return (
        <Layout namePage="colaboration">
            <section className="section">
                <h2>
                    Colabora
                </h2>
                <p>
                    Sinfiltros.org es una multiplataforma de educación sexual que está en constante crecimiento, si quieres colaborar, llena el siguiente formulario:
                </p>
                <form className="uk-form formColaboration">
                    <fieldset className="uk-fieldset">
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Tu nombre" />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="email" placeholder="Tu E-mail" />
                        </div>

                        <div className="checkbox-container">
                            <h3>
                                ¿Cómo puedes colaborar?
                            </h3>
                            <label classname="container">
                                <input
                                    className="regular-checkbox big-checkbox"
                                    type="checkbox"
                                />
                                <span className="text"> Puedo colaborar con información de educación sexual</span>
                            </label>
                            <label classname="container">
                                <input
                                    // className="uk-checkbox"
                                    type="checkbox"
                                />
                                <span className="checkmark"></span>
                                <span className="text"> Puedo colaborar con apoyo psicológico</span>
                            </label>
                            <label classname="container">
                                <input
                                    // className="uk-checkbox"
                                    type="checkbox"
                                />
                                <span className="text"> Puedo colaborar con información legal</span>
                            </label>
                            <label>
                                <input
                                    // className="uk-checkbox"
                                    type="checkbox"
                                />
                                <span className="text"> Puedo colaborar con ilustraciones</span>
                            </label>
                            <label>
                                <input
                                    // className="uk-checkbox"
                                    type="checkbox"
                                />
                                <span className="text"> Puedo colaborar como influencer</span>
                            </label>
                            <label>
                                <input
                                    // className="uk-checkbox"
                                    type="checkbox"
                                />
                                <span className="text"> Puedo colaborar económicamente</span>
                            </label>
                        </div>


                        <div className="button-container">
                            <button onClick={(e) => handleSubmit(e)} className="uk-button uk-button-primary button" type="button">Enviar</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </Layout >
    )
}

export { Colaboration }