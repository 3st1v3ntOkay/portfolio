import type { DateProps } from "@/models/types";
import style from './date.module.css';

export const DateComp = ({
  children,
  date
}: DateProps) => {
  return (
    <time dateTime={date} className={style.date}>
      {children}
    </time>
  )
}