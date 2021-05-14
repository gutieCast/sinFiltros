import React from 'react'
import imgHome from '../../assets/img/hero-index.png';
import { Layout } from '../../components/Layout'
import { arrayCards } from './infoCards.js'
import { GridCards } from '../../components/GridCards'


const Home = () => {
    const img = {
        url: imgHome,
        alt: " Illustration. Six teenager friends are together. They looked happy.",
        id: 'img-hero'
    }

    const textHome = {
        text: ['Educación sexual integral', <br />, 'sin culpas ', <br />, 'ni vergüenzas']
    }
    return (
        <>
            <Layout showHero={true} img={img} text={textHome.text} >
                <GridCards array={arrayCards} />
            </Layout>
        </>
    )
}

export { Home }