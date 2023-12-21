import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import Link from 'next/link'
import { Card, HeaderComp, Information } from '@/components'
import { github } from '../data'
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
          <h1>Personal page</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.</p>
        </HeaderComp>

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