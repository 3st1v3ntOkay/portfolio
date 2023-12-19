import React from 'react'
import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <h1>Development page.</h1>
        <Link href="/">Home</Link>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Blog