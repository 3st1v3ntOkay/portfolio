import style from './css/card.module.css';
import type { ChildrenProps } from "@/models/types";

const IconTitle = ({
  children
}: ChildrenProps) => {
  return (
    <div className={style["title-card"]}>
      {children}
    </div>
  )
}

export { IconTitle };