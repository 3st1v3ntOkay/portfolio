import style from './language.module.css';
import { Anchor } from '..';

const Language = () => {
  return (
    <span className={style['language-content']}>
      <Anchor url='#'>
        Spanish
      </Anchor>
      <Anchor url='#'>
        English
      </Anchor>
    </span>
  )
}

export { Language };