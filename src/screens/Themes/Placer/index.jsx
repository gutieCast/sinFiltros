import React from 'react'
import { Layout } from '../../components/Layout'
import { GridCards } from '../../components/GridCards'
import './placer.scss'

const Placer = () => {
    return (
        <Layout namePage='placer'>
            <h2>
                Placer
            </h2>
            <GridCards />
        </Layout>
    )
}

export { Placer }