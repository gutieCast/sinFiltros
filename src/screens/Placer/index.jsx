import React from 'react'
import imgPlacer from '../../assets/img/personajes/3_02.png'
import { Layout } from '../../components/Layout'

const Placer = () => {
    const img = {
        url: imgPlacer,
        alt: "Character Placer",
        id: 'img-placer'
    }
    return (
        <Layout img={img}>
            <h2>
                Placer
            </h2>
        </Layout>
    )
}

export { Placer }