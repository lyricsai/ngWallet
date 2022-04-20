import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/data/cards';
import { ICard } from 'src/app/interfaces/card';
import { ICategory } from 'src/app/interfaces/category';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cards: ICard[] = [];
  constructor() {}

  ngOnInit(): void {
    this.cards = Cards.map((e) => e);
  }
}
