import { Pages } from "@/models/types";
import { v4 as uuidv4 } from 'uuid';

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
