import React from 'react'
import style from './page.module.css'
import { Footer, Top } from '@/layouts'
import Link from 'next/link'
import { KeyIcon } from '@/components/keys'
import Image from 'next/image'
import html from '../../assets/simpleicon/Iconos=html.svg'

interface CurrentProps {
  id: number | string
  name: string
  image: string
  alt: string
}

const Work = () => {
  const current = ["HTML", "CSS", "JavaScript", "Typescript", "React", "Nodejs", "Git", "pnpm", "Nextjs", "Astro", "Vite", "CSS modules", "Testing library", "Jest", "Markdown", "Github", "Figma", "Notion", "VS Code"];
  const currentlytest = [
    {
      id: 1,
      name: "HTML",
      image: html,
      alt: "HTML logo",
    },
    {
      id: 2,
      name: "CSS",
      image: html,
      alt: "CSS logo",
    },
    {
      id: 3,
      name: "JavaScript",
      image: html,
      alt: "JavaScript logo",
    },
    {
      id: 4,
      name: "Typescript",
      image: html,
      alt: "Typescript logo",
    },
  ];

  const past = ["Yarn", "npm", "MUI", "styled-components", "Tailwindcss", "create-react-app", "mongodb", "mongoose", "Supabase", "Sanity", "Firebase"];
  const future = ["Rust", "Go", "Prisma", "Nest", "Fastify", "Github Actions", "Kubertenes", "Docker", "AWS"];

  return (
    <div className={style["content-grid"]}>
      <div className={`${style["top"]} ${style.breakout}`}>
        <Top />
      </div>

      <main className={`${style["main"]} ${style.breakout}`}>
        <Link href="/">Home</Link>

        <div className={style["content-main"]}>
          <h1 className={style["title-main"]}>Work.</h1>
          <p className={style["p-main"]}>Here is a brief overview of my technology expertise:</p>
        </div>

        <section className={style.technologies}>
          <ul className={style.ul}>
            <li>Programing languages, frameworks, and tools necessary to build a website.</li>
          </ul>

          {/* {currentlytest.map(({ id, name, image, alt }: CurrentProps) => (
            <KeyIcon key={id}>
              {name}
              <Image
                src={image}
                width={16}
                height={16}
                alt={alt}
              />
            </KeyIcon>
          ))} */}

          <div className={style.multiple}>
            {current.map((value, index) => (
              <KeyIcon key={index}>
                {value}
                <Image
                  src={html}
                  width={16}
                  height={16}
                  alt='logo'
                />
              </KeyIcon>
            ))}
          </div>
        </section>

        <section className={style.technologies}>
          <ul className={style.ul}>
            <li>Programing languages, frameworks, and tools that I used.</li>
          </ul>

          <div className={style.multiple}>
            {past.map((value, index) => (
              <KeyIcon key={index}>
                {value}
                <Image
                  src={html}
                  width={16}
                  height={16}
                  alt='logo'
                />
              </KeyIcon>
            ))}
          </div>
        </section>

        <section className={style.technologies}>
          <ul className={style.ul}>
            <li>Programing languages, frameworks, and tools that I would like to dive into them.</li>
          </ul>

          <div className={style.multiple}>
            {future.map((value, index) => (
              <KeyIcon key={index}>
                {value}
                <Image
                  src={html}
                  width={16}
                  height={16}
                  alt='logo'
                />
              </KeyIcon>
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

export default Work