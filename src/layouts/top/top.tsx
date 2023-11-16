import React from 'react'
import { Info, Language, Search } from '@/components'
import style from './top.module.css'

const Top = () => {
  return (
    <header>
      <Info />
      <section className={style.menu}>
        <Search />
        <Language />
      </section>
    </header>
  )
}

export default Top