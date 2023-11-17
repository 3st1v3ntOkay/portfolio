import { Footer, Top } from '@/layouts'
import style from './page.module.css'
import { Card, CardPerson, CardPersonMini } from '@/components'
import { catFace1 } from '@/assets/emoji/emoji-cat';

export default function Home() {
  const info = [{
    title: "how I work",
    description: "Here you can find the programming languages and technologies I use for website development.",
  }];

  return (
    <>
      <Top />

      <main className={style.main}>
        <h1>Welcome.</h1>

        <Card
          title={info[0].title}
          description={info[0].description}
          image={catFace1}
        />

        <CardPerson image={catFace1}>
          Jack Herrington
        </CardPerson>

        <CardPersonMini image={catFace1}>
          Jack Herrington
        </CardPersonMini>
      </main>

      <Footer />
    </>
  )
}
