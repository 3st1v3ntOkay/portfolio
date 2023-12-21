import { catFace1, catFace3, icon } from '@/assets/emoji';
import { lemonRetro, waveRetro } from '@/assets/png';
import { Articles, Preview } from '@/models/types';
import { v4 as uuidv4 } from 'uuid';

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
