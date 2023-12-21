import style from './page.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { preview } from '../data';

import { Footer, Top } from '@/layouts';
import { Card, FillButton, HeaderComp, IconTitle, Information } from '@/components';

import { Arrow } from '../svg';

const Blog = () => {
  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <HeaderComp>
          <Link href="/">Home</Link>
          <h1>Blog page</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.</p>
        </HeaderComp>

        <Information gap='wide'>
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
        </Information>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Blog