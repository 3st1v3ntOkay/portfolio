import style from './page.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { future, old, stack } from '../data';

import { HeaderComp, Information, Row, Key } from '@/components';
import { Footer, Main, Top } from '@/layouts';

const Work = () => {
  return (
    <div className={style.flow}>
      <Top />

      <Main>
        <HeaderComp>
          <Link href="/">Home</Link>
          <h1>Work.</h1>
          <p>Here is a brief overview of my technology expertise:</p>
        </HeaderComp>

        <Information gap='wide'>
          <p>I use this:</p>

          <Row>
            {stack.map(({ id, name, image, alt }) => (
              <Key key={id}>
                <Image
                  src={image}
                  width={16}
                  height={16}
                  alt={alt}
                />
                {name}
              </Key>
            ))}
          </Row>
        </Information>

        <Information gap='wide'>
          <p>I used to use this:</p>

          <Row>
            {old.map(({ id, name, image, alt }) => (
              <Key key={id}>
                <Image
                  src={image}
                  width={16}
                  height={16}
                  alt={alt}
                />
                {name}
              </Key>
            ))}
          </Row>
        </Information>

        <Information gap='wide'>
          <p>I want to use this:</p>

          <Row>
            {future.map(({ id, name, image, alt }) => (
              <Key key={id}>
                <Image
                  src={image}
                  width={16}
                  height={16}
                  alt={alt}
                />
                {name}
              </Key>
            ))}
          </Row>
        </Information>
      </Main>

      <Footer />
    </div>
  )
}

export default Work