import style from './main.module.css';
import type { ChildrenProps } from "@/models/types";

const Main = ({
  children,
}: ChildrenProps) => {
  return (
    <main className={style.mid}>
      {children}
    </main>
  )
}

export { Main };
