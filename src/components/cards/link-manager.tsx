import style from './css/card.module.css';
import { ChildrenProps } from "@/models/types";

const LinkManager = ({
  children
}: ChildrenProps) => {
  return (
  <div className={style["link-manager"]}>
    {children}
  </div>
  )
}

export { LinkManager };