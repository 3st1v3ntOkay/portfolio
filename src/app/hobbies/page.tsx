import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import Link from 'next/link'
import { Card, HeaderComp, Information, Key, Row } from '@/components'
import { github, music, sports, videogames } from '../data/data'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]}`}>
        <HeaderComp>
          <Link href="/">Home</Link>
          <h1>Bugs page</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.</p>
        </HeaderComp>

        <Information gap='wide'>
          <h2>Games</h2>

          <Row>
            {videogames.map(({ id, game }) => (
              <Key key={id}>
                {game}
              </Key>
            ))}
          </Row>
        </Information>

        <Information gap='wide'>
          <h2>Sports</h2>

          <Row>
            {sports.map(({ id, game }) => (
              <Key key={id}>
                {game}
              </Key>
            ))}
          </Row>
        </Information>

        <Information gap='wide'>
          <h2>Music</h2>

          <Information>
            <Information gap='wide'>
              {music.map(({ id, name, albums }) => (
                <Information key={id}>
                  <h4>
                    {name}
                  </h4>
                  <Row>
                    {albums.map((album) => (
                      <Key key={id}>
                        {album}
                      </Key>
                    ))}
                  </Row>
                </Information>
              ))}
            </Information>
          </Information>
        </Information>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Projects