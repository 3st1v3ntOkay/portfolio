/* Own */
import { Links, Tutors, Pages } from "@/models/types";
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
import { catFace1 } from '@/assets/emoji/emoji-cat';

/* Libraries */
import { v4 as uuidv4 } from 'uuid';

// Ver si puedo hacer un algoritmo junto a nodejs que me actualice mis datos que uso para la pagina, useando una funcion

/* pages up-to-date */
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
    page: "development page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/development',
    disabled: true,
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
    page: "habbies page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/hobbies',
    disabled: true,
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
    disabled: true,
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

/* github links up-to-date */
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
