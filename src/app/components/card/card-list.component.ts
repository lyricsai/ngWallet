import { Component, OnInit, OnChanges } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardListComponent implements OnInit {
  cards: ICard[] = [];
  posts: any;
  filterTitle: string = '';
  filterCat: string = '';

  constructor(protected cardService: CardService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAllCards().subscribe((data) => (this.cards = data));
  }

  recieveFilterTitle($event: string) {
    this.filterTitle = $event;
  }
  recieveFilterCategory($event: string) {
    this.filterCat = $event;
  }
}
