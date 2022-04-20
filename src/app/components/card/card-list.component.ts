import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardListComponent implements OnInit, OnChanges {
  cards: ICard[] = [];

  constructor(protected cardService: CardService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  ngOnChanges() {
    this.getAllCards();
  }

  getAllCards() {
    this.cards = this.cardService.cards;
  }
}
