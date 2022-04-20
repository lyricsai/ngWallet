import { ICard } from '../interfaces/card';

export const Categories: string[] = [
  'Cash',
  'Loyalty',
  'Access',
  'Identity',
  'Transport',
  'Other',
];
export const Cards: Array<ICard> = [
  {
    id: '2',
    title: 'Another Card',
    cardNumber: '9012345678',
    category: 'Loyalty',
    fav: false,
    picture: null,
    name: '',
    dueDate: '',
    notes: 'some data',
    issuer: '',
  },
  {
    id: '3',
    title: 'Some Card',
    cardNumber: '0123456789',
    category: 'Loyalty',
    fav: true,
    picture: null,
    name: 'John Doe',
    dueDate: '',
    notes: '',
    issuer: '',
  },
  {
    id: '1',
    title: 'The Other Card',
    cardNumber: '1234567890',
    category: 'Other',
    fav: false,
    picture: null,
    name: '',
    dueDate: '',
    notes: '',
    issuer: '',
  },
];
