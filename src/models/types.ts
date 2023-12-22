import type { StaticImageData } from "next/image";

export interface ChildrenProps {
  children: React.ReactNode
}

export interface SVGProps {
  color: string
  disabled: boolean
}

export interface CardProps {
  title: string
  description: string
  link: string
}

export interface Tutors {
  id: string
  avatar: StaticImageData
  name: string
  description: string
  links: {
    youtube: string,
    github: string,
  }
}

export interface Links {
  id: string
  image: StaticImageData
  repository: string
  url: string
  year: number
}

export interface Pages {
  id: string
  page: string
  description: string
  url: string
  disabled: boolean
  icon: StaticImageData
  alt: string
}

export interface Videogames {
  id: string
  game: string
}

export interface Music {
  id: string
  name: string
  albums: string[]
}

export interface Technologies {
  id: string
  name: string
  image: StaticImageData
  alt: string
}

export interface Tools extends Technologies {
  url: string 
}

export interface Preview {
  id: string
  title: string
  icon: StaticImageData
  description: string
  url: string
}

interface Images {
  id: string
  image: StaticImageData
  width: number
  height: number
  alt: string
}

export interface Articles {
  id: string
  title: string
  author: string
  avatar: StaticImageData
  date: Date
  description: string
  images: Array<Images>
}

export interface StaticPageParams {
  params: {
    article: string
  }
}

export interface DateProps extends ChildrenProps {
  date: string
}
export interface RowProps extends ChildrenProps {
  type?: 'normal' | 'space'
}
