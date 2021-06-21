import React from 'react'
import { Layout } from '../../../components/Layout'
import './aboutUs.scss'

const AboutUs = () => {
    return (
        <Layout namePage="about-us">
            <section className="section">
                <h2>
                    Acerca de
                </h2>
                <p>
                    Sinfiltros.org es una plataforma que provee información real acerca del sexo, la sexualidad, la reproducción, las relaciones y el placer en un formato divertido.
                    Buscamos enlazar la pedagogía con las plataformas digitales multimedia para proveer a lxs usuarixs en etapa de adolescencia educación sexual integral de manera directa.
                </p>
            </section>
            <section className="section">
                <h2>
                    Preguntas frecuentes
                </h2>
                <div className="question-container">
                    <h4>
                        ¿Desde qué edad se considera apropiada la implementación de educación sexual en la vida de un niño o adolescente?
                    </h4>
                    <p>
                        La educación sexual es un proceso de enseñanza que no tiene una edad específica de iniciación, y es mejor que las conversaciones en torno a estos temas se den antes, a que se den demasiado tarde.
                    </p>
                    <p>
                        Sinfiltros.org está pensada y diseñada para usuarixs adolescentes de entre 12 a 18 años. Por tanto, los recursos y el contenido de los materiales de la plataforma son más adecuados para estas edades.
                    </p>
                </div>
                <div className="question-container">
                    <h4>
                        ¿Cómo se crean los recursos de la plataforma?
                    </h4>
                    <p>
                        Sinfiltros cuenta con un equipo que consta de: psicopedagogxs, redactorxs, diseñadorxs, ilustradorxs y programadorxs.
                    </p>
                    <p>
                        Los contenidos son creados con base en un consolidado elaborado por especialistas en educación sexual para adolescentes.
                    </p>
                    <p>
                        Si deseas sugerir un tema que no se haya tratado, puedes escribirnos a

                        <a href="mailto:info@sinfiltros.org"> info@sinfiltros.org</a>
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export { AboutUs }
