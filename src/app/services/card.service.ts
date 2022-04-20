import { Injectable } from '@angular/core';
import { Cards } from '../data/cards';
import { ICard } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards: ICard[] = [
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

  currentId: number | string = '';
  constructor() {}

  addId(): string {
    return (this.currentId = new Date().getTime().toString());
  }

  addCard(card: ICard): void {
    this.addId();
    this.cards.push(card);
  }

  getAllCards(): ICard[] {
    this.cards = this.cards.map((e) => e);
    return this.cards;
  }

  getCardById(id: number | string): ICard | undefined {
    id = id.toString();
    return this.cards.find((card) => card.id === id);
  }

  deleteById(id: number | string): any {
    id = id.toString();
    this.cards = this.cards.filter((card) => card.id !== id);
  }
}
