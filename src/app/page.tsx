import { Footer, Top } from '@/layouts'
import style from './page.module.css'
import { ButtonHeroiconOutline, Card } from '@/components'
import { catFace1 } from '@/assets/emoji/emoji-cat';
import Link from 'next/link';

interface CardProps {
  title: string
  description: string
  link: string
}

export default function Home() {
  const info = [
    {
      title: "bugs page",
      description: "Here you can find the programming languages and technologies I use for website development.",
      link: '/bugs',
    },
    {
      title: "development page",
      description: "Here you can find the programming languages and technologies I use for website development.",
      link: '/development',
    },
    {
      title: "follow page",
      description: "Here you can find the programming languages and technologies I use for website development.",
      link: '/follow',
    },
    {
      title: "habbies page",
      description: "Here you can find the programming languages and technologies I use for website development.",
      link: '/hobbies',
    },
    {
      title: "personal page",
      description: "Here you can find the programming languages and technologies I use for website development.",
      link: '/personal',
    },
    {
      title: "work page",
      description: "Here you can find the programming languages and technologies I use for website development.",
      link: '/work',
    },
  ];

  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <div className={style["content-main"]}>
          <h1 className={style["title-main"]}>Welcome.</h1>
          <p className={style["p-main"]}>I introduce myself as Esteban Jimenez Valdez (a 21 years old guy). A couple of years ago, I embarked on my programming journey. With the dedication and effort, I enthusiastically continue on this amazing path, eager to take on new challenges.</p>

          {/* TODO */}
          <div className={style["content-x-main"]}>
            <Link href="https://github.com/3st1v3ntOkay" target='_blank'>
              <ButtonHeroiconOutline left={false} right={true}>
                Github
              </ButtonHeroiconOutline>
            </Link>
            <Link href="https://www.linkedin.com/in/esteban-j-valdez/" target='_blank'>
              <ButtonHeroiconOutline left={false} right={true}>
                Linkedin
              </ButtonHeroiconOutline>
            </Link>
          </div>
        </div>

        {/* TODO */}
        <div className={style["list-card"]}>
          {info.map(({ title, description, link }: CardProps, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              image={catFace1}
              link={link}
            />
          ))}
        </div>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}
