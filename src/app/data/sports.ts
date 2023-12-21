import { Videogames } from '@/models/types';
import { v4 as uuidv4 } from 'uuid';

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
