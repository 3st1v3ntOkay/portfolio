import type { StaticImageData } from "next/image"

export interface ChildrenProps {
  children: React.ReactNode
}

export interface SVGProps {
  color: string
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
}
