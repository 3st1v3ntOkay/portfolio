import React from 'react'
import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import Link from 'next/link'
import { MiniMusicCard } from '@/components/cards'
import { Artist, Wrapping } from '@/components/cards/card'
import { v4 as uuidv4 } from 'uuid';
// import type { V4Options } from 'uuid'

interface DataProps {
  id: any,
  name: string
  albums: AlbumsProps[]
}

interface AlbumsProps {
  id: number
  albumName: string
  year: number
}

const Hobbies = () => {
  const data: DataProps[] = [
    {
      id: uuidv4(),
      name: "Masayoshi Takanaka",
      albums: [
        {
          id: 1,
          albumName: "Seychelles",
          year: 1976,
        },
        {
          id: 2,
          albumName: "Takanaka",
          year: 1977,
        },
        {
          id: 3,
          albumName: "Brasilian Skies",
          year: 1978,
        },
      ]
    },
    {
      id: uuidv4(),
      name: "Ryo Fukui",
      albums: [
        {
          id: 1,
          albumName: "Scenery",
          year: 1976,
        },
        {
          id: 2,
          albumName: "Mallow Dream",
          year: 1977,
        },
        {
          id: 3,
          albumName: "My Favorite Tune",
          year: 1994,
        },
        {
          id: 4,
          albumName: "A Letter From Slowboat",
          year: 2015,
        },
      ]
    },
  ]

  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]}`}>
        <Link href="/">Home</Link>

        <div className={style["content-main"]}>
          <h1 className={style["title-main"]}>About me.</h1>
          <p className={style["p-main"]}>Well, let&#96;s see my hobbies:</p>
        </div>

        {data.map(({ id, name, albums }) => (
          <Artist key={id}>
            <h2>{name}</h2>
            
            <Wrapping>
              {albums.map(({ id, albumName, year }) => (
                <MiniMusicCard key={id}>
                  {year} - {albumName}
                </MiniMusicCard>
              ))}
            </Wrapping>
          </Artist>
        ))}
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Hobbies