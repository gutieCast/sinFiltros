import React from 'react'
import imgHome from '../../assets/img/hero-index.png';
import { Layout } from '../../components/Layout'
import { GridCards } from './components'


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
            <Layout img={img} text={textHome.text} showHero={true}>
                <GridCards />
            </Layout>
        </>
    )
}

export { Home }