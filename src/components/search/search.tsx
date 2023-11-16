import style from './search.module.css'

const Search = () => {
  return (
    <div className={style['search-content']}>
      <p className={style.page}>Home</p>
      <button className={style.button}>Ctrl B</button>
    </div>
  )
}

export default Search