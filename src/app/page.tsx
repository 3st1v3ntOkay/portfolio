import './globals.css';
import style from './page.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { pages } from './data';

import { Card, FillButton, IconTitle, Information, HeaderComp, Row } from '@/components';
import { Footer, Main, Top } from '@/layouts';

import { catFace1 } from '@/assets/emoji';
import { Arrow } from './svg';

export default function Home() {
  return (
    <div className={style.flow}>
      <Top />

      <Main>
        <HeaderComp>
          <h1>Welcome.</h1>
          <p>I introduce myself as Esteban Jimenez Valdez (a 21 years old guy). A couple of years ago, I embarked on my programming journey. With the dedication and effort, I enthusiastically continue on this amazing path, eager to take on new challenges.</p>
        </HeaderComp>

        <Row>
          {pages.map(({
            id,
            page,
            description,
            url,
            disabled,
            icon,
            alt,
          }) => (
            <Card outline key={id}>
              <Information gap='normal'>
                <IconTitle>
                  <h4>{page}</h4>
                  <Image
                    src={icon}
                    width={32}
                    height={32}
                    alt={alt}
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
        </Row>
      </Main>

      <Footer />
    </div>
  )
}
