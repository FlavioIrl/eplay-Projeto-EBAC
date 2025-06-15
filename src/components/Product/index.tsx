import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  description: string
  system: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id
}: Props) => {
  const getDescription = (Text: string) => {
    if (Text.length > 95) {
      return Text.slice(0, 92) + '...'
    }
    return Text
  }
  return (
    <S.Card
      title={`clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
