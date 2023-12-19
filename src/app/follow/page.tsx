/* Nextjs */
import Link from 'next/link';

/* Own */
import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import { tutors } from '../data/data';
import { Banner, Card, HeaderComp, Information, LinkManager } from '@/components';

/* Imagenes */
import { lemonRetro } from '@/assets/png/';
import { Arrow } from '../svg';

const Follow = () => {
  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <HeaderComp>
          <Link href="/">Home</Link>
          <h1 className={style["title-main"]}>Greats.</h1>
          <p className={style["p-main"]}>
            “If I have seen further it is by standing on the shoulders of Giants.”
            ― Isaac Newton, The Correspondence of Isaac Newton: Volume 5, 1709–1713
          </p>
          <p>People I follow and I recommend to everyone:</p>
        </HeaderComp>

        <Information gap='wide'>
           {/* Haver una funcion la cual quite los espacios y ponga '_', las mayusculas las haga minusculas */}
          {tutors.map(({
              id,
              avatar,
              name,
              description,
              links,
            }) => (
              <Card outline key={id}>
                <Banner
                  banner={lemonRetro}
                  avatar={avatar}
                />

                <Information gap='wide'>
                  <h4>{name}</h4>
                  <p>{description}</p>

                  <LinkManager>
                    <Link href={links.youtube} className={style.outline}>
                      @{name} on YouTube
                      <Arrow color='dark' disabled={false} />
                    </Link>
                    <Link href={links.github} className={style.outline}>
                      @{name} on Github
                      <Arrow color='dark' disabled={false} />
                    </Link>
                  </LinkManager>
                </Information>
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

export default Follow