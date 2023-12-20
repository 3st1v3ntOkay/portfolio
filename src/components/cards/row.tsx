import type { RowProps } from "@/models/types";
import style from './css/card.module.css'

const Row = ({
  children,
  type = 'normal'
}: RowProps) => {
  return (
    <section className={type === 'normal' ? style.row : style['space-row']}>
      {children}
    </section>
  )
}

export { Row };