import type { ChildrenProps } from "@/models/types";
import style from './css/card.module.css'

const Row = ({
  children
}: ChildrenProps) => {
  return (
    <section className={style.row}>
      {children}
    </section>
  )
}

export { Row };