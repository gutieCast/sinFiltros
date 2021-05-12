import React from 'react'
import imgEspada from '../../assets/img/iconosYPatrones/Patrones/Espada.png'
import { Layout } from '../../components/Layout'
import './aboutUs.scss'

const AboutUs = () => {
    const img = {
        url: imgEspada,
        alt: "Sword pattern",
        id: 'img-about-us   '
    }

    return (
        <Layout img={img}>
            <section className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical description" >
                <h2>
                    Acerca de
                </h2>
                <div className="parraph">
                    Sinfiltros.org es una plataforma que provee información real acerca del sexo, la sexualidad, la reproducción, las relaciones y el placer en un formato divertido.
                    Buscamos enlazar la pedagogía con las plataformas digitales multimedia para proveer a los usuarios en etapa de adolescencia educación sexual integral de manera directa.
                </div>
            </section>
            <section className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical faq">
                <h2>
                    Preguntas frecuentes
                </h2>
                <div>
                    <h3>
                        ¿Desde qué edad se considera apropiada la implementación de educación sexual en la vida de un niño o adolescente?
                    </h3>
                    <div className="parraph">
                        La educación sexual es un proceso de enseñanza que no tiene una edad específica de iniciación, y es mejor que las conversaciones en torno a estos temas se den antes, a que se den demasiado tarde.
                    </div>
                    <div className="parraph">
                        Sinfiltros.org está pensada y diseñada para usuarios adolescentes de entre 12 a 18 años. Por tanto, los recursos y el contenido de los materiales de la plataforma son más adecuados para estas edades.
                    </div>
                </div>
                <div>
                    <h3>
                        ¿Cómo se crean los recursos de la plataforma?
                    </h3>
                    <div className="parraph">
                        Sinfiltros cuenta con un equipo que consta de: psicopedagógas, redactoras, diseñadoras, ilustradoras y progamadoras.
                    </div>
                    <div className="parraph">
                        Los contenidos son creados con base en un consolidado elaborado por especialistas en educación sexual para adolescentes.
                    </div>
                    <div className="parraph">
                        Si deseas sugerir un tema que no se haya tocado, puedes escribirnos a <a href="mailto:info@sinfiltros.org">info@sinfiltros.org</a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export { AboutUs }
