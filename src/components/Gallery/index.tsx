import Section from '../Section'
import { Item, Items, Action } from './styles'

import hogwarts from '../../assets/images/fundo_hogwarts.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import zoom from '../../assets/images/mais-zoom.png'
import play from '../../assets/images/play.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=FfzHhEzXXSQKOMxq'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMidiaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMidiaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <Section title="Galeria" background="black">
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
            <img
              src={getMidiaCover(media)}
              alt={`Mídia ${index + 1} de ${name}`}
            />
            <Action>
              <img
                src={getMidiaIcon(media)}
                alt="Click para maximizar a mídia"
              />
            </Action>
          </Item>
        ))}
      </Items>
    </Section>
  )
}
export default Gallery
