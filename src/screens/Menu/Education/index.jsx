import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Card } from '../../../components'
import imgDownloableHandbook from '../../../assets/img/cover-handbook-sin-filtros.png';
import './education.scss'

const Education = () => {
    const imgRoute = imgDownloableHandbook;
    return (
        <Layout namePage="education">
            <div className="section">
                <h2>
                    Educadores
                </h2>
                <Link className="link" to="/files/guia_educación_sexual.pdf" target="_blank" download>
                    <Card
                        title={"PDF descargable"}
                        src={imgRoute}
                        alt={"handbook by sinfiltros.org"}
                        id={"imgHandbook"}
                    />
                </Link>
                <p>
                    Desde la imagen puede descargar una gúia de educación sexual en formato pdf
                </p>
            </div>
        </Layout>
    )
}

export { Education }