import imgPlacer from '../../../../assets/img/cards/placer.png'
import imgRelaciones from '../../../../assets/img/cards/relaciones.png'
import imgCuerpos from '../../../../assets/img/cards/cuerpos.png'
import imgGenero from '../../../../assets/img/cards/genero.png'
import imgSexoSexualidad from '../../../../assets/img/cards/sexo-sexualidad.png'
import imgDerechos from '../../../../assets/img/cards/derechos-sexuales-reproductivos.png'

const infoCards = [
    {
        title: "Placer",
        src: imgPlacer,
        alt: "Ilustración. Chica que está en postura relajada con lupa en mano leyendo un libro gigante que hace de cama.",
        id: 'imgPlacer',
        link: '/placer'
    },
    {
        title: "Relaciones",
        src: imgRelaciones,
        alt: "Ilustración. Chico está hablando por teléfono, como enviando un audio. Sobre él se ven emojins y cuadros de audios enviados por mensajería instantánea.",
        id: 'imgRelaciones',
        link: '/relaciones'
    },
    {
        title: "Cuerpos",
        src: imgCuerpos,
        alt: "Ilustración. Un chico sentado en una banca y está comiendo una hamburguesa",
        id: 'imgCuerpos',
        link: '/cuerpos'

    },
    {
        title: "Género",
        src: imgGenero,
        alt: "Ilustración. Una persona no binaria. Está en su estudio de grabación, tiene varios instrumentos folklóricos, y está delante de su computadora y tornamesa.",
        id: 'imgGenero',
        link: '/genero'
    },
    {
        title: ["Sexo y ", <br />, "Sexualidad"],
        src: imgSexoSexualidad,
        alt: "Ilustración. Un chico que está bebiendo de un tomatodo, tomando un descanso de un partido de fútbol. Está de pie, con uno de ellos sobre el balón.",
        id: 'imgSexoSexualidad',
        link: '/sexo-y-sexualidad'
    },
    {
        title: "Derechos",
        src: imgDerechos,
        alt: "Ilustración. Una avatar de videojuego venciendo con una espada a un monstruo.",
        id: 'imgDerechos',
        link: 'derechos-sexuales-y-reproductivos'
    }
]

export const arrayCards = infoCards