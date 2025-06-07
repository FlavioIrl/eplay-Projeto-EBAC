import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Titulo, Precos } from './styles'

import { formataPreco } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  //renomeando para game/\, não precisa mudar os nomes das chamadas dele

  if (!game) {
    return <h3> Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
