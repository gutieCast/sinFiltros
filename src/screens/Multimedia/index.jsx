import React from 'react'
import imgLaptop from '../../assets/img/iconosYPatrones/Patrones/Laptop.png'
import { Layout } from '../../components/Layout'
// import './aboutUs.scss'

const Multimedia = () => {
    const img = {
        url: imgLaptop,
        alt: "Laptop pattern",
        id: 'img-education'
    }
    return (
        <Layout img={img}>
            <h2>
                Multimedia
            </h2>
        </Layout>
    )
}

export { Multimedia }