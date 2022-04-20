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
  id!: number;

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
    this.router.navigate(['cards']);
    if (confirm('Delete this card?')) {
      this.cardService.deleteById(id);
      console.log('Delete card id: ', id, typeof id);
    }
  }
}
