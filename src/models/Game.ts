class Game {
  category: string
  description: string
  image: string
  system: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    system: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
    this.system = system
    this.infos = infos
  }
}

export default Game
