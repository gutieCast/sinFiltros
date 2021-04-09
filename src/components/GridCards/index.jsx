import React from 'react'
import { Card } from '../Card'
import imgPlacer from '../../assets/img/cards/placer.png'
import imgRelaciones from '../../assets/img/cards/relaciones.png'
import imgCuerpos from '../../assets/img/cards/cuerpos.png'
import imgGenero from '../../assets/img/cards/genero.png'
import imgSexoSexualidad from '../../assets/img/cards/sexo-sexualidad.png'
import imgDerechos from '../../assets/img/cards/derechos-sexuales-reproductivos.png'

const topics = [
    {
        title: "Placer",
        src: imgPlacer,
        alt: "Ilustración. Chica que está en postura relajada con lupa en mano leyendo un libro gigante que hace de cama.",
        id: 'imgPlacer'
    },
    {
        title: "Relaciones",
        src: imgRelaciones,
        alt: "Ilustración. Chico está hablando por teléfono, como enviando un audio. Sobre él se ven emojins y cuadros de audios enviados por mensajería instantánea.",
        id: 'imgRelaciones'
    },
    {
        title: "Cuerpos",
        src: imgCuerpos,
        alt: "Ilustración. Un chico sentado en una banca y está comiendo una hamburguesa",
        id: 'imgCuerpos'

    },
    {
        title: "Género",
        src: imgGenero,
        alt: "Ilustración. Una persona no binaria. Está en su estudio de grabación, tiene varios instrumentos folklóricos, y está delante de su computadora y tornamesa.",
        id: 'imgGenero'
    },
    {
        title: "Sexo y Sexualidad",
        src: imgSexoSexualidad,
        alt: "Ilustración. Un chico que está bebiendo de un tomatodo, tomando un descanso de un partido de fútbol. Está de pie, con uno de ellos sobre el balón.",
        id: 'imgSexoSexualidad'
    },
    {
        title: "Derechos sexuales y reproductivos",
        src: imgDerechos,
        alt: "Ilustración. Una avatar de videojuego venciendo con una espada a un monstruo.",
        id: 'imgDerechos'
    }
]

const GridCards = () => {
    return (
        <div class="uk-width-auto@m uk-flex uk-flex-center uk-flex-wrap uk-flex-wrap-around gridCards" uk-grid uk-height-match="target: > div > .uk-card" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true" uk-grid="parallax: 150">
            {
                topics.map(({ title, src, alt, id }) =>
                    <Card
                        title={title}
                        src={src}
                        alt={alt}
                        id={id}
                    />
                )
            }
        </div>
    )
}

export { GridCards }