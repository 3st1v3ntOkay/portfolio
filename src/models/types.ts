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
