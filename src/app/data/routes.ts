import { catFace1, catFace2, catFace3, catFace4, catFace5 } from "@/assets/emoji";
import { Pages } from "@/models/types";
import { v4 as uuidv4 } from 'uuid';

export const pages: Pages[] = [
  {
    id: uuidv4(),
    page: "blog page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/blog',
    disabled: false,
    icon: catFace1,
    alt: 'happy cat emoji',
  },
  {
    id: uuidv4(),
    page: "follow page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/follow',
    disabled: false,
    icon: catFace2,
    alt: 'cat emoji laughing',
  },
  {
    id: uuidv4(),
    page: "hobbies page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/hobbies',
    disabled: false,
    icon: catFace3,
    alt: 'cat emoji laughing',
  },
  {
    id: uuidv4(),
    page: "personal page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/personal',
    disabled: false,
    icon: catFace4,
    alt: 'cat emoji in love',
  },
  {
    id: uuidv4(),
    page: "work page",
    description: "Here you can find the programming languages and technologies I use for website development.",
    url: '/work',
    disabled: false,
    icon: catFace5,
    alt: 'cat emoji mad',
  },
];
