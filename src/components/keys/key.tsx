import React from 'react';
import style from './key.module.css';

interface Props {
  children: React.ReactNode
}

const Key = ({ children }: Props) => {
  return (
    <p className={style.key}>{children}</p>
  )
}

export default Key