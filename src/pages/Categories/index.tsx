import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && simulationGames && rpgGames && sportGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background={'black'} />
        <ProductsList games={sportGames} title="Esportes" background={'grey'} />
        <ProductsList games={fightGames} title="Luta" background={'black'} />
        <ProductsList games={rpgGames} title="RPG" background={'grey'} />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background={'black'}
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
