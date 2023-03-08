import { ReactNode } from 'react'

export type TNote = {
  id: number
  name: string
  email: string
}

export interface ITodoIndividual {
  note: TNote
}

export type TImageCard = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
  children?: ReactNode
}

export interface IImageCard {
  image: TImageCard
}

export interface ICard {
  children: ReactNode
  variant?: 'outlined' | undefined | 'elevation'
  action: ReactNode
}
