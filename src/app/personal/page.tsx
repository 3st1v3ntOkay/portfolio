import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import Link from 'next/link'
import { Card, Info, Information, Key } from '@/components'
import { github, music, sports, videogames } from '../data/data'
import Image from 'next/image'

const Projects = () => {
 
  

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

        <section className={style.technologies}>
          <ul className={style.ul}>
            <li>Programing languages, frameworks, and tools that I used.</li>
          </ul>

          <div className={style.multiple}>
            {videogames.map((value, index) => (
              <Key key={index}>
                {value}
              </Key>
            ))}
          </div>
        </section>

        <section className={style.technologies}>
          <ul className={style.ul}>
            <li>Programing languages, frameworks, and tools that I used.</li>
          </ul>

          <div className={style.multiple}>
            {sports.map((value, index) => (
              <Key key={index}>
                {value}
              </Key>
            ))}
          </div>
        </section>

        <section className={style.technologies}>
          <ul className={style.ul}>
            <li>Programing languages, frameworks, and tools that I used.</li>
          </ul>

          <div className={style.multiple}>
            <Info>
              Some data and names of the songs could change because although I have listened and listen to a lot of this music I don&apos;t totally remember all their names and I want to be as precise as possible, so until this message doesn&apos;t disappear, it means that I&apos;m still working on it.
            </Info>

            <div className={style.sort}>
              {music.map(({ name, albums }, index) => (
                <div className={style.sort2} key={index}>
                  <h2 key={index} className={style.h2}>
                    {name}
                  </h2>
                  <div className={style.multiple}>
                    {albums.map((album, indox) => (
                      <Key key={indox}>
                        {album}
                      </Key>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Information>
          {github.map(({
            id,
            image,
            repository,
            url,
            year,
          }) => (
            <Card outline={false} key={id}>
              <Information gap='normal'>
                <Link href={url} className={style["white-link"]}>
                  3st1v3ntOkay/{repository}
                </Link>
                <h2 className={style.white}>{repository}</h2>
              </Information>

              <Image
                src={image}
                width={24}
                height={24}
                alt='github'
              />
              <p className={style.size}>{year}</p>
            </Card>
          ))}
        </Information>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Projects