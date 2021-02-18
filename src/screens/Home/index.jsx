import React from 'react'
import { Layout } from '../../components/Layout'
import { Hero } from './components/Hero'
import { Main } from './components/Main'

const Home = () => {
    return (
        <>
            <Layout>
                <Main>
                    <Hero></Hero>
                </Main>
            </Layout>

        </>
    )
}

export { Home }