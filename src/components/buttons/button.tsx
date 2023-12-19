import './default.css';
import style from './button.module.css';
import type { ChildrenProps } from '@/models/types';

const FillButton = ({
  children,
}: ChildrenProps) => {
  return (
    <button type='button'>
      {children}
    </button>
  )
}

const OutlineButton = ({
  children
}: ChildrenProps) => {
  return (
    <button type='button' className={style.outline}>
      {children}
    </button>
  )
}

export { FillButton, OutlineButton };