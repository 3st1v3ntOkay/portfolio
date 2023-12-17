import type { ChildrenProps } from '@/models/types';
import style from './info.module.css';

const Info = ({ children }: ChildrenProps) => {
  return <p className={style.info}>{children}</p>;
}

export default Info;
