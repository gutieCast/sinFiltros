import React from 'react'
// import imgHero from '../../assets/img/hero-index.png';
import { Layout } from '../../components/Layout'
import { GridCards } from './components'

const imgHome = {
    url: "../../assets/img/hero-index.png",
    alt: " Illustration. Six teenager friends are together. They looked happy.",
    id: 'img-hero'
}

const textHome = {
    text: 'Educacion sexual integral sin culpas ni vergüenzas'
}

const Home = () => {
    return (
        <>
            <Layout img={imgHome} text={textHome.text}>
                <GridCards />
            </Layout>
        </>
    )
}

export { Home }