import React from 'react'
import { Info, Search } from '@/components'
import style from './top.module.css'

const Top = () => {
  return (
    <header>
      <Info>
        This page is still under construction, sorry if you see any visual or functional bug, just press Ctrl B and go report section.
      </Info>
      <section className={style.menu}>
        <Search />
      </section>
    </header>
  )
}

export default Top