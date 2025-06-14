import ProductsList from '../../components/ProductsList'

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
        <ProductsList
          games={actionGames}
          title="Ação"
          background={'black'}
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background={'grey'}
          id="sports"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background={'black'}
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background={'grey'}
          id="rpg"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background={'black'}
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
