import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [GamesAcao, setGamesAcao] = useState<Game[]>([])
  const [GamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [GamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [GamesLuta, setGamesLuta] = useState<Game[]>([])
  const [GamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={GamesAcao} title="Ação" background={'black'} />
      <ProductsList
        games={GamesEsportes}
        title="Esportes"
        background={'grey'}
      />
      <ProductsList games={GamesLuta} title="Luta" background={'black'} />
      <ProductsList games={GamesRPG} title="RPG" background={'grey'} />
      <ProductsList
        games={GamesSimulacao}
        title="Simulação"
        background={'black'}
      />
    </>
  )
}

export default Categories
