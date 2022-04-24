import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICard } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardDetailComponent implements OnInit {
  @Input() card!: ICard;

  id: number | string = '';
  showMore: boolean = false;
  date: string = '';

  constructor(
    protected cardService: CardService,
    private route: ActivatedRoute,
    protected router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.card) {
      this.getCard();
    }
    this.date = new Date(this.card.dueDate).toDateString();
  }

  getCard() {
    this.cardService
      .getCardById(this.id)
      .subscribe((data) => (this.card = data));
  }

  toggle(): void {
    this.showMore = !this.showMore;
  }
}
