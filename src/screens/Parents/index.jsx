import React from 'react'
import imgCharango from '../../assets/img/iconosYPatrones/Patrones/Charango.png'
import { Layout } from '../../components/Layout'
// import './aboutUs.scss'

const Parents = () => {
    const img = {
        url: imgCharango,
        alt: "Ball pattern",
        id: 'img-parents'
    }
    return (
        <Layout img={img}>
            <h2>
                Padres
            </h2>
        </Layout>
    )
}

export { Parents }