import './header.css';
import style from '@/app/page.module.css';
import type { ChildrenProps } from "@/models/types";

const HeaderComp = ({
  children
}: ChildrenProps) => {
  return (
    <div className='bg'>
      {children}
    </div>
  )
}

export { HeaderComp };