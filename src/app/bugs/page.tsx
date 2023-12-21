import style from './page.module.css';

import Link from 'next/link';

import { Footer, Top } from '@/layouts';
import { HeaderComp } from '@/components';

const Bug = () => {
  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <HeaderComp>
          <Link href="/">Home</Link>
          <h1>Bugs page</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.</p>
        </HeaderComp>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Bug