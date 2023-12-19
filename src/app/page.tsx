/* Own */
import { Footer, Top } from '@/layouts'
import style from './page.module.css'
import { Card, FillButton, IconTitle, Information } from '@/components'

/* Nextjs */
import Image from 'next/image';
import Link from 'next/link';

/* Imagenes */
import { catFace1 } from '@/assets/emoji/emoji-cat';
import { Arrow } from './svg';

/* Data */
import { tutors, github, pages } from './data/data';

export default function Home() {
  return (
    <div className={style["content-grid"]}>
      <div className={`${style.top} ${style.breakout}`}>
        <Top />
      </div>

      <main className='breakout'>
        <Information gap='wide'>
          {pages.map(({
            id,
            page,
            description,
            url,
            disabled,
          }) => (
            <Card outline key={id}>
              <Information gap='normal'>
                <IconTitle>
                  <h4>{page}</h4>
                  <Image
                    src={catFace1}
                    width={32}
                    height={32}
                    alt="cat smilling"
                  />
                </IconTitle>

                <p>{description}</p>
              </Information>

              <Link href={url}>
                <FillButton disabled={disabled}>
                  check
                  <Arrow color='light' disabled={disabled} />
                </FillButton>
              </Link>
            </Card>
          ))}
        </Information>
      </main>

      <div className={`${style.bottom} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}
