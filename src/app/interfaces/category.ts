import { ICard } from './card';

export interface ICategory {
  name: string;
  count: number;
  cards: ICard[];
}
