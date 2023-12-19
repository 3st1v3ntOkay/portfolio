import './css/default.css';
import style from './css/card.module.css';
import type { ChildrenProps } from '@/models/types';

interface Borders {
  outline: boolean
}

/* <Card>
    <Section>
      <IconTitle>
        <h2>Bugs</h2>
        <Image
          src={catFace1}
          width={32}
          height={32}
          alt="cat smilling"
        />
      </IconTitle>

      <p>Here you can find the programming languages and technologies I use for website development.</p>
    </Section>

    <Link href='/bugs'>
      <FillButton>
        check
        <Arrow color='light' />
      </FillButton>
    </Link>
  </Card>
*/
const Card = ({
  children,
  outline = true,
}: ChildrenProps & Borders) => {
  return (
    <article className={
      outline ? style.card : style.next
    }>
      {children}
    </article>
  )
}

export { Card };