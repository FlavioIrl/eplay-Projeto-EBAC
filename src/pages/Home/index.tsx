import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'

import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumgnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: onSoonGames } = useGetSoonQuery()

  if (onSaleGames && onSoonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background={'grey'}
        />
        <ProductsList
          games={onSoonGames}
          title="Em breve"
          background={'black'}
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
