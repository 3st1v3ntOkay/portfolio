/* Own */
import { Links, Tutors, Pages, Videogames, Music, Technologies, Tools, Articles, Preview } from "@/models/types";
import {
  alan,
  jack,
  kevin,
  lee,
  midudev,
  prime,
  sam,
  theo,
  fazt,
} from '@/assets/jpg';
import { catFace1, catFace3 } from '@/assets/emoji/emoji-cat';
import icon from '@/assets/emoji/logo/icon.svg';

/* Libraries */
import { v4 as uuidv4 } from 'uuid';
import { lemonRetro, waveRetro } from "@/assets/png";
import { avatarMe, ikeaRetro } from "@/assets/avatar";

// Ver si puedo hacer un algoritmo junto a nodejs que me actualice mis datos que uso para la pagina, useando una funcion

/* delete disabled property */
export const pages: Pages[] = [
  {
    id: uuidv4(),
    page: "bugs page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/bugs',
    disabled: false,
  },
  {
    id: uuidv4(),
    page: "blog page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/blog',
    disabled: false,
  },
  {
    id: uuidv4(),
    page: "follow page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/follow',
    disabled: false,
  },
  {
    id: uuidv4(),
    page: "hobbies page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/hobbies',
    disabled: false,
  },
  {
    id: uuidv4(),
    page: "personal page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/personal',
    disabled: false,
  },
  {
    id: uuidv4(),
    page: "work page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/work',
    disabled: false,
  },
];

/* improve descriptions */
export const tutors: Tutors[] = [
  {
    id: uuidv4(),
    avatar: jack,
    name: "Jack Herrington",
    description: "Frontend videos from basic to very advanced; tutorials, technology deep dives. ",
    links: {
      youtube: 'https://www.youtube.com/@jherr',
      github: 'https://github.com/jherr',
    }
  },
  {
    id: uuidv4(),
    avatar: alan,
    name: "Gentleman Programming",
    description: "Hola gente!! Cómo andamos? Así que bienvenidos a este canal especial para programadores y gente a la que le gusta el mundo de la programación web! Se suben clases y todo tipo de eventos de manera semanal y se dispone también un canal de discord de la comunidad!",
    links: {
      youtube: 'https://www.youtube.com/@GentlemanProgramming',
      github: 'https://github.com/AppleLAN',
    }
  },
  {
    id: uuidv4(),
    avatar: theo,
    name: "Theo Browne",
    description: "CEO of Ping.gg - t3.gg - Ex-Twitch Engineer - Creator Obsessed - Inventor of the T3 Stack - Building cool stuff :)",
    links: {
      youtube: 'https://www.youtube.com/@t3dotgg',
      github: '',
    }
  },
  {
    id: uuidv4(),
    avatar: prime,
    name: "ThePrimeTime",
    description: "This is a place for all the things that are awesome on stream.",
    links: {
      youtube: 'https://www.youtube.com/@ThePrimeTimeagen',
      github: '',
    }
  },
  {
    id: uuidv4(),
    avatar: kevin,
    name: "Kevin Powell",
    description: "Helping you learn how to make the web, and make it look good while you're at it.",
    links: {
      youtube: 'https://www.youtube.com/@KevinPowell',
      github: '',
    }
  },
  {
    id: uuidv4(),
    avatar: lee,
    name: "Lee Robinson",
    description: "VP of Product at Vercel",
    links: {
      youtube: 'https://www.youtube.com/@leerob',
      github: '',
    }
  },
  {
    id: uuidv4(),
    avatar: midudev,
    name: "midudev",
    description: "Streamings sobre Desarrollo FullStack con JavaScript de midudev en Twitch. Directos completos y extracto de los mejores momentos. ",
    links: {
      youtube: 'https://www.youtube.com/@midulive',
      github: 'https://github.com/midudev',
    }
  },
  {
    id: uuidv4(),
    avatar: fazt,
    name: "Fazt",
    description: "FaztCode es un canal de programacion, tutoriales y proyectos web, en donde podras encontrar ejemplos prácticos de lenguajes y tecnologías com Python, Javascript, Go, Rust, Typescript, Django, Nodejs, Flutter, React, React Native, Expressjs, Mongodb, MySQL, PostgreSQL, GraphQL, REST API, y muchas más.",
    links: {
      youtube: 'https://www.youtube.com/@FaztCode',
      github: '',
    }
  },
  {
    id: uuidv4(),
    avatar: sam,
    name: "Sam Selikoff",
    description: "Quality videos on frontend development",
    links: {
      youtube: 'https://www.youtube.com/@samselikoff',
      github: '',
    }
  },
];

export const github: Links[] = [
  {
    id: uuidv4(),
    image: catFace1,
    repository: 'daily-problems',
    url: 'https://github.com/3st1v3ntOkay/daily-problems',
    year: 2023,
  },
  {
    id: uuidv4(),
    image: catFace1,
    repository: 'test-zone-nextjs',
    url: 'https://github.com/3st1v3ntOkay/test-zone-nextjs',
    year: 2023,
  },
  {
    id: uuidv4(),
    image: catFace1,
    repository: 'test-zone-astro',
    url: 'https://github.com/3st1v3ntOkay/test-zone-astro',
    year: 2023,
  },
  {
    id: uuidv4(),
    image: catFace1,
    repository: 'javascript-next-level',
    url: 'https://github.com/3st1v3ntOkay/javascript-next-level',
    year: 2023,
  },
];

export const videogames: Videogames[] = [
  {
    id: uuidv4(),
    game: "Counter Strike",
  },
  {
    id: uuidv4(),
    game: "Apex Legends",
  },
  {
    id: uuidv4(),
    game: "Insurgency",
  },
  {
    id: uuidv4(),
    game: "Terraria",
  },
  {
    id: uuidv4(),
    game: "Minecraft",
  },
  {
    id: uuidv4(),
    game: "FIFA",
  },
  {
    id: uuidv4(),
    game: "Call of Duty",
  },
];

export const sports: Videogames[] = [
  {
    id: uuidv4(),
    game: "Football",
  },
  {
    id: uuidv4(),
    game: "Calisthenics",
  },
  {
    id: uuidv4(),
    game: "Running",
  },
];

export const music: Music[] = [
  {
    id: uuidv4(),
    name: "Ryo Fukui",
    albums: ["Scenery", "My Favorite Tune", "Mello Dream", "A Letter From Slowboat"],
  },
  {
    id: uuidv4(),
    name: "Tatsuro Yamashita",
    albums: ["Spacy", "Go Ahead!", "Moonglow", "Come Along", "Ride on Time", "For You", "Big Wave", "Pacific (with Haruomi Hosono and Shigeru Suzuki), Come Along II"],
  },
  {
    id: uuidv4(),
    name: "Coldplay",
    albums: ["Parachutes", "X&Y", "Viva la Vida or Death and All His Friends", "Ghost Stories", "Everyday Life"],
  },
  {
    id: uuidv4(),
    name: "Anri",
    albums: ["Timely!!"],
  },
  {
    id: uuidv4(),
    name: "Miki Matsubara",
    albums: ["Pocket Park"],
  },
  {
    id: uuidv4(),
    name: "Ennio Marricone",
    albums: ["Ennio Morricone - Sergio Leone Greatest Western Music of All Time (Remastered HQ Audio)"],
  },
  {
    id: uuidv4(),
    name: "Hajime Wakai, Mahito Yokota, Shiho Fujii, Takeshi Hama",
    albums: ["The Legend of Zelda: Skyward Sword"],
  },
  {
    id: uuidv4(),
    name: "Toru Minegishi, Asuka Ota, Koji Kondo",
    albums: ["The Legend of Zelda: Twilight Princess"],
  },
  {
    id: uuidv4(),
    name: "Koji Kondo, Toru Minegishi",
    albums: ["The Legend of Zelda: Majora's Mask"],
  },
  {
    id: uuidv4(),
    name: "Johann Sebastian Bach",
    albums: ["Violin Concertos", "French Suites", "Suites for Guitar", "English Suites", "Goldeng Variations", "Partitas"],
  },
  {
    id: uuidv4(),
    name: "Frédéric François Chopin​",
    albums: ["Nocturnos"],
  },
  {
    id: uuidv4(),
    name: "Franz Liszt​",
    albums: ["Hugarian Rhapsodies", "La campanella"],
  },
  {
    id: uuidv4(),
    name: "Gustav Mahler​",
    albums: ["Symphonies"],
  },
  {
    id: uuidv4(),
    name: "Johannes Brahms​",
    albums: ["Hungarian Dances"],
  },
  {
    id: uuidv4(),
    name: "Johann Baptist Strauss II​",
    albums: ["Waltz", "Polkas", "Operetas"],
  },
  {
    id: uuidv4(),
    name: "Georg Friedrich Händel​",
    albums: ["Waltz", "Concertos"],
  },
  {
    id: uuidv4(),
    name: "Giuseppe Fortunino Francesco Verdi​",
    albums: ["Operas"],
  },
  {
    id: uuidv4(),
    name: "Niccolò Paganini",
    albums: ["24 Caprichos", "Devil's trill Sonata", "Ghiribizzi"],
  },
  {
    id: uuidv4(),
    name: "Makis Ablianitis",
    albums: ["Bahar"],
  },
  {
    id: uuidv4(),
    name: "Brazilian regional music",
    albums: ["Sol de Bossa: Bossa Nova", "Sol de Bossa: Bossa Felicidade", "Sol de Bossa: Bossa Beleza"],
  },
  {
    id: uuidv4(),
    name: "Masayoshi Takanaka",
    albums: ["All Of Me"],
  },
  {
    id: uuidv4(),
    name: "Casiopea",
    albums: ["Galactic Funk", "Casiopea vs Tsquare - Fightman"],
  },
];

export const stack: Technologies[] = [
  {
    id: uuidv4(),
    name: "HTML",
    image: catFace1,
    alt: "html logo",
  },
  {
    id: uuidv4(),
    name: "CSS",
    image: catFace1,
    alt: "css logo",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    image: catFace1,
    alt: "javascript logo",
  },
  {
    id: uuidv4(),
    name: "Typescript",
    image: catFace1,
    alt: "typescript logo",
  },
  {
    id: uuidv4(),
    name: "React",
    image: catFace1,
    alt: "react logo",
  },
  {
    id: uuidv4(),
    name: "Nodejs",
    image: catFace1,
    alt: "nodejs logo",
  },
  {
    id: uuidv4(),
    name: "git",
    image: catFace1,
    alt: "git logo",
  },
  {
    id: uuidv4(),
    name: "pnpm",
    image: catFace1,
    alt: "pnpm logo",
  },
  {
    id: uuidv4(),
    name: "nextjs",
    image: catFace1,
    alt: "nextjs logo",
  },
  {
    id: uuidv4(),
    name: "Astro",
    image: catFace1,
    alt: "astro logo",
  },
  {
    id: uuidv4(),
    name: "Vite",
    image: catFace1,
    alt: "vite logo",
  },
  {
    id: uuidv4(),
    name: "CSS Modules",
    image: catFace1,
    alt: "css modules logo",
  },
  {
    id: uuidv4(),
    name: "Testing Library",
    image: catFace1,
    alt: "testing library logo",
  },
  {
    id: uuidv4(),
    name: "Jest",
    image: catFace1,
    alt: "jest logo",
  },
  {
    id: uuidv4(),
    name: "Markdown",
    image: catFace1,
    alt: "markdown logo",
  },
  {
    id: uuidv4(),
    name: "Github",
    image: catFace1,
    alt: "github logo",
  },
  {
    id: uuidv4(),
    name: "Figma",
    image: catFace1,
    alt: "figma logo",
  },
  {
    id: uuidv4(),
    name: "Notion",
    image: catFace1,
    alt: "notion logo",
  },
  {
    id: uuidv4(),
    name: "VS Code",
    image: catFace1,
    alt: "vscode logo",
  },
];

export const old: Technologies[] =[
  {
    id: uuidv4(),
    name: "Yarn",
    image: catFace1,
    alt: "yarn logo",
  },
  {
    id: uuidv4(),
    name: "npm",
    image: catFace1,
    alt: "npm logo",
  },
  {
    id: uuidv4(),
    name: "MUI",
    image: catFace1,
    alt: "mui logo",
  },
  {
    id: uuidv4(),
    name: "styled-components",
    image: catFace1,
    alt: "styled-components logo",
  },
  {
    id: uuidv4(),
    name: "tailwindcss",
    image: catFace1,
    alt: "tailwindcss logo",
  },
  {
    id: uuidv4(),
    name: "create-react-app",
    image: catFace1,
    alt: "create-react-app logo",
  },
  {
    id: uuidv4(),
    name: "mongodb",
    image: catFace1,
    alt: "mongodb logo",
  },
  {
    id: uuidv4(),
    name: "mongoose",
    image: catFace1,
    alt: "mongoose logo",
  },
  {
    id: uuidv4(),
    name: "Supabase",
    image: catFace1,
    alt: "supabase logo",
  },
  {
    id: uuidv4(),
    name: "Sanity",
    image: catFace1,
    alt: "sanity logo",
  },
  {
    id: uuidv4(),
    name: "Firebase",
    image: catFace1,
    alt: "firebase logo",
  },
];

export const future: Technologies[] =[
  {
    id: uuidv4(),
    name: "rust",
    image: catFace1,
    alt: "rust logo",
  },
  {
    id: uuidv4(),
    name: "Go",
    image: catFace1,
    alt: "go logo",
  },
  {
    id: uuidv4(),
    name: "Prisma",
    image: catFace1,
    alt: "prisma logo",
  },
  {
    id: uuidv4(),
    name: "Nest",
    image: catFace1,
    alt: "nest logo",
  },
  {
    id: uuidv4(),
    name: "fastify",
    image: catFace1,
    alt: "fastify logo",
  },
  {
    id: uuidv4(),
    name: "Github Actions",
    image: catFace1,
    alt: "github actions logo",
  },
  {
    id: uuidv4(),
    name: "Kubertenes",
    image: catFace1,
    alt: "kubertenes logo",
  },
  {
    id: uuidv4(),
    name: "Docker",
    image: catFace1,
    alt: "docker logo",
  },
  {
    id: uuidv4(),
    name: "AWS",
    image: catFace1,
    alt: "aws logo",
  },
  {
    id: uuidv4(),
    name: "lazyvim",
    image: catFace1,
    alt: "lazyvim logo",
  },
];

export const tools: Tools[] = [
  {
    id: uuidv4(),
    name: 'pkg-size',
    image: catFace1,
    alt: 'pkg-size logo',
    url: 'https://pkg-size.dev/'
  },
  {
    id: uuidv4(),
    name: 'tsdocs.dev',
    image: catFace1,
    alt: 'tsdocs.dev logo',
    url: 'https://tsdocs.dev/'
  },
];

export const preview: Preview[] = [
  {
    id: uuidv4(),
    title: 'my proccess through my page design',
    icon: catFace1,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.',
    url: '/blog/portfolio-design',
  },
  {
    id: uuidv4(),
    title: 'my proccess through my page development',
    icon: catFace3,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.',
    url: '/blog/portfolio-development',
  },
];

export const articles: Articles[] = [
  {
    id: 'portfolio-design',
    title: 'my proccess through my page design',
    author: 'Esteban Jimenez Valdez',
    avatar: icon,
    date: new Date("2023-12-20T01:11:15"),
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.',
    images: [
      {
        id: uuidv4(),
        image: lemonRetro,
        width: 1200,
        height: 1779,
        alt: 'abstract retro image',
      },
    ],
  },
  {
    id: 'portfolio-development',
    title: 'my proccess through my page development',
    author: 'Esteban Jimenez Valdez',
    avatar: icon,
    date: new Date("2023-12-20T01:11:32"),
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit, adipisci voluptas doloribus, eveniet hic, provident facilis alias dignissimos iusto qui in error. Nostrum velit, at soluta quam itaque esse.',
    images: [
      {
        id: uuidv4(),
        image: waveRetro,
        width: 1200,
        height: 1779,
        alt: 'abstract retro image',
      },
    ],
  },
];

export const articlePage = [
  { article: 'portfolio-design' },
  { article: 'portfolio-development' }
];