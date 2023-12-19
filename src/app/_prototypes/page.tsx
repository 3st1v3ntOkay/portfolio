import React from 'react'
import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import { SimpleLink } from '@/components'

interface LinkProps {
  name: string
  link: string
}

const Projects = () => {
  const links = [
    {
      name: "counter style twitch counter spectators",
      link: "/prototypes/sam"
    },
    {
      name: "my custom links",
      link: "/prototypes/links"
    },
  ]

  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <SimpleLink link="/">Home</SimpleLink>

        {/* convertirlo en un componente */}
        <div className={style["content-main"]}>
          <h1 className={style["title-main"]}>About me.</h1>
          <p className={style["p-main"]}>Well, let&#96;s see my hobbies:</p>
        </div>

        <section className={style.technologies}>
          <ul className={style.ul}>
            <li>Programing languages, frameworks, and tools that I used.</li>
          </ul>

          <div className={style.column}>
            {links.map(({ name, link }: LinkProps, index) => (
              <SimpleLink key={index} link={link}>{name}</SimpleLink>
            ))}
          </div>
        </section>
      </main>

      <div className={`${style["bottom"]} ${style.breakout}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Projects