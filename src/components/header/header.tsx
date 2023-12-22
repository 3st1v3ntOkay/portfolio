import './default.css';
import style from './header.module.css';
import type { ChildrenProps } from "@/models/types";

const HeaderComp = ({
  children
}: ChildrenProps) => {
  return (
    <header className={style.header}>
      {children}
    </header>
  )
}

export { HeaderComp };