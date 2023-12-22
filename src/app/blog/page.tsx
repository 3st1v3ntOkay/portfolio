import style from './page.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { preview } from '../data';

import { Footer, Main, Top } from '@/layouts';
import { Card, FillButton, HeaderComp, IconTitle, Information, Row } from '@/components';

import { Arrow } from '../svg';

const Blog = () => {
  return (
    <div className={style.flow}>
      <Top />

      <Main>
        <HeaderComp>
          <Link href="/">back</Link>
          <h1>Blog page</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.</p>
        </HeaderComp>

        <Row>
          {preview.map(({
            id,
            title,
            icon,
            description,
            url,
          }) => (
            <Card outline key={id}>
              <Information gap='normal'>
                <IconTitle>
                  <h4>{title}</h4>
                  <Image
                    src={icon}
                    width={32}
                    height={32}
                    alt="cat smilling"
                  />
                </IconTitle>

                <p>{description}</p>
              </Information>

              <Link href={url}>
                <FillButton>
                  check
                  <Arrow color='light' disabled={false} />
                </FillButton>
              </Link>
            </Card>
          ))}
        </Row>
      </Main>

      <Footer />
    </div>
  )
}

export default Blog