import { Game } from '../../pages/Home'
import { parseToBrl } from '../../utils'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }
  //teste
  return (
    <S.Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                title={game.name}
                category={game.details.category}
                description={game.description}
                infos={getGameTags(game)}
                system={game.details.system}
                image={game.media.thumgnail}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
