import style from './card.module.css';
import { ButtonHeroiconFill, ButtonHeroiconOutline } from '@/components'
import Image from 'next/image';

interface Props {
  title: string
  description: string
  image: string
}

interface Props2 {
  children: React.ReactNode
  image: string
}

// * Componente terminado
const Card = ({ title, description, image }: Props) => {
  return (
    <article className={style["card"]}>
      <div className={style["relative-card"]}>
        <div className={style["content-x-card"]}>
          <h2 className={style["title-card"]}>{title}</h2>
          <Image
            src={image}
            width={32}
            height={32}
            alt="cat smilling"
          />
        </div>

        <p>{description}</p>
      </div>

      <ButtonHeroiconFill left={false} right={true}>
        check
      </ButtonHeroiconFill>
    </article>
  )
}

// * Componente terminado
const CardPerson = ({ children, image }: Props2) => {
  return (
    <article className={style["card_person"]}>
      <div className={style["relative-card_person"]}>
        <Image
          className={style["avatar-card_person"]}
          src={image}
          width={64}
          height={64}
          alt="cat smilling"
        />
      </div>

      <div className={style["content-y-card_person-main"]}>
        <div className={style["content-y-card_person"]}>
          <h2 className={style["title-card_person"]}>{children}</h2>
          <p>Frontend videos from basic to very advanced; tutorials, technology deep dives. You&apos;ll love it!</p>
        </div>

        <div className={style["content-x-card_person"]}>
          <ButtonHeroiconOutline left={false} right={true}>
            follow
          </ButtonHeroiconOutline>
          <ButtonHeroiconOutline left={false} right={true}>
            follow
          </ButtonHeroiconOutline>
        </div>
      </div>
    </article>
  )
}

// * Componente terminado
const CardPersonMini = ({ children, image }: Props2) => {
  return (
    <article className={style["card_mini"]}>
      <div className={style["relative-card_mini"]}>
        <Image
          className={style["avatar-card_mini"]}
          src={image}
          width={64}
          height={64}
          alt="cat smilling"
        />
      </div>

      <div className={style["content-y-card_mini"]}>
        <h2 className={style["title-card_mini"]}>{children}</h2>

        <div className={style["content-x-card_mini"]}>
          <ButtonHeroiconOutline left={false} right={true}>
            follow
          </ButtonHeroiconOutline>
          <ButtonHeroiconOutline left={false} right={true}>
            follow
          </ButtonHeroiconOutline>
        </div>
      </div>
    </article>
  )
}

export { Card, CardPerson, CardPersonMini }