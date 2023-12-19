import style from './css/card.module.css';
import type { ChildrenProps } from "@/models/types";

interface Gap {
  gap?: 'wide' | 'normal'
}

const Information = ({
  children,
  gap = 'normal'
}: ChildrenProps & Gap) => {
  return (
    <section className={
      gap === "wide"
        ? `${style["information-card"]} ${style["wide"]}`
        : `${style["information-card"]} ${style["normal"]}`
    }>
      {children}
    </section>
  )
}

export { Information };