import React from 'react'
import { Layout } from '../../components/Layout'

const AboutUs = () => {
    const imgAboutUs = {
        url: "../../../../assets/img/hero-index.png",
        alt: " Illustration. Six teenager friends are together. They looked happy.",
        id: 'img-hero'
    }

    const textAboutUs = {
        text: 'Acerca de sinfiltros.org'
    }

    return (
        <Layout img={imgAboutUs}>
            <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" >
                <h2>
                    {textAboutUs.text}
                </h2>
                <p>
                    Sinfiltros.org es una plataforma que provee información real acerca del sexo, la sexualidad, la reproducción, las relaciones y el placer en un formato divertido.
                    Buscamos enlazar la pedagogía con las plataformas digitales multimedia para proveer a los usuarios en etapa de adolescencia educación sexual integral de manera directa.
                </p>
            </div>
        </Layout>
    )
}

export { AboutUs }
