import React from 'react'
import imgDrink from '../../assets/img/iconosYPatrones/Patrones/Tomatodo.png'
import { Layout } from '../../components/Layout'
// import './aboutUs.scss'

const Colaboration = () => {
    const img = {
        url: imgDrink,
        alt: "Bottle pattern",
        id: 'img-colaboration'
    }
    return (
        <Layout img={img}>
            <h2>
                Colabora
            </h2>
            <p>
                Sinfiltros.org es una multiplataforma de educación sexual que está en constante crecimiento, si quieres colaborar, llena el siguiente formulario:
            </p>
            <form >
                <fieldset class="uk-fieldset">
                    <div className="uk-margin">
                        <input class="uk-input" type="text" placeholder="Nombre" />
                    </div>
                    <div className="uk-margin">
                        <input class="uk-input" type="email" placeholder="E-mail" />
                    </div>
                    <span>
                        <button className="uk-button uk-button-primary" type="button">Enviar</button>
                    </span>
                </fieldset>
            </form>
        </Layout>
    )
}

export { Colaboration }