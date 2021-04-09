import React from 'react'
import { GridCards } from '../../components'
import { Layout } from '../../components/Layout'
import { Hero } from './components/Hero'
import { Main } from './components/Main'

const Home = () => {
    return (
        <>
            <Layout>
                <Main>
                    <Hero />
                    <GridCards />
                </Main>
            </Layout>

        </>
    )
}

export { Home }