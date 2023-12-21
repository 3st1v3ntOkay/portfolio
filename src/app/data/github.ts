import { v4 as uuidv4 } from 'uuid';
import { Links } from '@/models/types';
import { catFace1 } from '@/assets/emoji';

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
