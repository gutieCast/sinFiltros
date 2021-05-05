import React from 'react'
import imgLaptop from '../../assets/img/iconosYPatrones/Patrones/Laptop.png'
import { Layout } from '../../components/Layout'

const AboutUs = () => {
    const img = {
        url: imgLaptop,
        alt: "Laptop pattern",
        id: 'img-about-us   '
    }

    return (
        <Layout img={img}>
            <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" >
                <h2>
                    Acerca de
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
