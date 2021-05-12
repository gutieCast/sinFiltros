import React from 'react'
import imgBall from '../../assets/img/iconosYPatrones/Patrones/Pelota.png'
import { Layout } from '../../components/Layout'
// import './aboutUs.scss'

const Education = () => {
    const img = {
        url: imgBall,
        alt: "Ball pattern",
        id: 'img-education'
    }
    return (
        <Layout img={img}>
            <h2>
                Educadores
            </h2>
            <p>
                Material de descarga
            </p>
        </Layout>
    )
}

export { Education }