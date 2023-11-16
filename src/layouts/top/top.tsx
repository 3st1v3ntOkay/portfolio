import React from 'react'
import { Info, Language, Search } from '@/components'
import style from './top.module.css'

const Top = () => {
  return (
    <header className={style.header}>
      <Info />
      <Search />
      <Language />
    </header>
  )
}

export default Top