import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { ICard } from '../../interfaces/card';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardDeleteComponent implements OnInit {
  id!: number | string;
  cards: ICard[] = [];

  constructor(
    protected cardService: CardService,
    private route: ActivatedRoute,
    protected router: Router
  ) {}

  ngOnInit() {
    this.delete();
  }

  delete(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (confirm('Delete this card?')) {
      console.log('Delete card id: ', id);
      this.cardService.deleteById(id).subscribe();

      this.getAllCards();
      setTimeout(() => {
        this.router.navigate(['cards']);
      }, 200);
    }
  }

  getAllCards(): void {
    this.cardService.getAllCards().subscribe((data) => (this.cards = data));
  }
}
