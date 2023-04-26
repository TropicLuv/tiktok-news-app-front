import { Image } from "./Image"

export interface PostEntity {
    id: number
    images: Image[]
    title: string
    shortArticle: string
    fullArticle: string
    date: string
}