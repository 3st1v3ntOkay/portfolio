import { Footer, Top } from '@/layouts'
import style from './page.module.css'
import { ButtonHeroiconOutline, Card } from '@/components'
import { catFace1 } from '@/assets/emoji/emoji-cat';

export default function Home() {
  const info = [{
    title: "how I work",
    description: "Here you can find the programming languages and technologies I use for website development.",
  }];

  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <div className={style["content-main"]}>
          <h1 className={style["title-main"]}>Welcome.</h1>
          <p className={style["p-main"]}>I introduce myself as Esteban Jimenez Valdez (a 21 years old guy). A couple of years ago, I embarked on my programming journey. With the dedication and effort, I enthusiastically continue on this amazing path, eager to take on new challenges.</p>

          <div className={style["content-x-main"]}>
            <ButtonHeroiconOutline left={false} right={true}>
              check
            </ButtonHeroiconOutline>
            <ButtonHeroiconOutline left={false} right={true}>
              check
            </ButtonHeroiconOutline>
          </div>
        </div>

        <div className={style["list-card"]}>
          <Card
            title={info[0].title}
            description={info[0].description}
            image={catFace1}
          />
          <Card
            title={info[0].title}
            description={info[0].description}
            image={catFace1}
          />
          <Card
            title={info[0].title}
            description={info[0].description}
            image={catFace1}
          />
          <Card
            title={info[0].title}
            description={info[0].description}
            image={catFace1}
          />
        </div>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}
