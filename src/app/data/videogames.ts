import { Videogames } from '@/models/types';
import { v4 as uuidv4 } from 'uuid';

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
