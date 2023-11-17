import { Key } from '..'
import style from './search.module.css'

const Search = () => {
  return (
    <div className={style['search-content']}>
      <p className={style.page}>Home</p>
      <Key>
        Ctrl B
      </Key>
    </div>
  )
}

export default Search