'use client'

import style from './language.module.css'

const Language = () => {
  return (
    <div className={style['language-content']}>
      <a href="#" className={style.language}>Español</a>
      <a href="#" className={style.language} style={{ fontWeight: '600' }}>Inglés</a>
    </div>
  )
}

export default Language