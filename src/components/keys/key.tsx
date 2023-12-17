import style from './key.module.css';
import { ChildrenProps } from '@/models/types';

const Key = ({ children }: ChildrenProps) => {
  return <p className={style.key}>{children}</p>;
}

export { Key };
