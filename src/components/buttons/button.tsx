import './default.css';
import style from './button.module.css';
import type { ButtonProps } from './models/types';

const FillButton = ({
  children,
}: ButtonProps) => {
  return (
    <button type='button'>
      {children}
    </button>
  )
}

const OutlineButton = ({
  children
}: ButtonProps) => {
  return (
    <button type='button' className={style.outline}>
      {children}
    </button>
  )
}

export { FillButton, OutlineButton };