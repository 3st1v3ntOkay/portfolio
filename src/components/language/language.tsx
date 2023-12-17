import Link from 'next/link';
import style from './language.module.css';

const Language = () => {
  return (
    <span className={style['language-content']}>
      <Link href='#'>
        Spanish
      </Link>
      <Link href='#'>
        English
      </Link>
    </span>
  )
}

export { Language };