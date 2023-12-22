import style from './page.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { github } from '../data';

import { Footer, Main, Top } from '@/layouts';
import { Card, HeaderComp, Information, Row } from '@/components';

const Projects = () => {
  return (
    <div className={style.flow}>
      <Top />

      <Main>
        <HeaderComp>
          <Link href="/">back</Link>
          <h1>Personal page</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.</p>
        </HeaderComp>

        <Row>
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
        </Row>
      </Main>

      <Footer />
    </div>
  )
}

export default Projects