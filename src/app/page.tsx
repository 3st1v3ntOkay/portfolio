import './globals.css';
import style from './page.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { pages } from './data';

import { Card, FillButton, IconTitle, Information, HeaderComp } from '@/components';
import { Footer, Top } from '@/layouts';

import { catFace1 } from '@/assets/emoji';
import { Arrow } from './svg';

export default function Home() {
  return (
    <div className={style.flow}>
      <div className={style.top}>
        <Top />
      </div>

      <main className={style.mid}>
        <HeaderComp>
          <h1>Welcome.</h1>
          <p>I introduce myself as Esteban Jimenez Valdez (a 21 years old guy). A couple of years ago, I embarked on my programming journey. With the dedication and effort, I enthusiastically continue on this amazing path, eager to take on new challenges.</p>
        </HeaderComp>

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

      <div className={style.bottom}>
        <Footer />
      </div>
    </div>
  )
}
