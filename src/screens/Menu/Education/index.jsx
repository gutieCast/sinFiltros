import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components/Layout'
import './education.scss'

const Education = () => {
    return (
        <Layout namePage="education">
            <h2>
                Educadores
            </h2>
            <p className="parraph">

                <Link className="link" to="/files/guia_educación_sexual.pdf" target="_blank" download>Haga click aquí </Link>
                para descargar el material
            </p>
        </Layout>
    )
}

export { Education }