import { Key } from '..';
import style from './search.module.css';

const Search = () => {
  return (
    <section className={style['search-content']}>
      <p className={style.p}>Home</p>
      <Key>
        Ctrl B
      </Key>
    </section>
  )
}

export { Search };