import style from './page.module.css';

import Link from 'next/link';
import { tutors } from '../data';

import { Footer, Main, Top } from '@/layouts';
import { Banner, Card, HeaderComp, Information, LinkManager, Row } from '@/components';

import { lemonRetro } from '@/assets/png/';
import { Arrow } from '../svg';

const Follow = () => {
  return (
    <div className={style.flow}>
      <Top />

      <Main>
        <HeaderComp>
          <Link href="/">back</Link>
          <h1>Greats.</h1>
          <blockquote cite='https://www.goodreads.com/author/quotes/135106.Isaac_Newton'>
            <p>“If I have seen further it is by standing on the shoulders of Giants.”</p>
            <footer>― Isaac Newton, <cite>The Correspondence of Isaac Newton: Volume 5, 1709–1713</cite></footer>
          </blockquote>
          <p>People I follow and I recommend to everyone:</p>
        </HeaderComp>

        <Row>
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
                {/* <p>{description}</p> */}

                <LinkManager>
                  <Link href={links.youtube} className={style.outline}>
                    YouTube
                    <Arrow color='dark' disabled={false} />
                  </Link>
                  <Link href={links.github} className={style.outline}>
                    Github
                    <Arrow color='dark' disabled={false} />
                  </Link>
                </LinkManager>
              </Information>
            </Card>
          ))}
        </Row>
      </Main>

      <Footer />
    </div>
  )
}

export default Follow