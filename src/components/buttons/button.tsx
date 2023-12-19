import './default.css';
import style from './button.module.css';
import type { ButtonProps } from './models/types';

const FillButton = ({
  children,
  disabled,
}: ButtonProps) => {
  return (
    <button type='button' disabled={disabled}>
      {children}
    </button>
  )
}

const OutlineButton = ({
  children,
  disabled,
}: ButtonProps) => {
  return (
    <button type='button' className={style.outline} disabled={disabled}>
      {children}
    </button>
  )
}

export { FillButton, OutlineButton };