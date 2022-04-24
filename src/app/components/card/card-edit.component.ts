import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICard } from 'src/app/interfaces/card';
import { Categories } from 'src/app/data/cards';
import { CardService } from 'src/app/services/card.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardEditComponent implements OnInit {
  isAddMode: boolean = false;
  id: string = '';
  newCard!: FormGroup;
  card!: ICard;
  cards: ICard[] = [];
  categories: string[] = Categories;

  constructor(
    protected cardService: CardService,
    protected router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.id = this.route.snapshot.params['id'];

      this.newCard = this.editCard();
      this.getCard();
    } else {
      this.isAddMode = !this.id;
      this.id = new Date().getTime().toString();

      this.newCard = this.editCard();
    }
  }

  onSubmit({ value, valid }: { value: ICard; valid: boolean }) {
    if (this.newCard && valid) {
      this.cardService
        .addCard({ ...value, id: this.id })
        .subscribe((card) => this.cards.push(card));

      this.getAllCards();

      setTimeout(() => {
        this.router.navigate(['cards']);
      }, 200);
    } else {
      return;
    }
  }

  getCard() {
    this.cardService.getCardById(this.id).subscribe((data) => {
      this.card = data;
      this.newCard = this.editCard();
    });
  }

  editCard(): FormGroup {
    return new FormGroup({
      title: new FormControl(this.card?.title || '', [
        Validators.required,
        Validators.minLength(2),
      ]),
      cardNumber: new FormControl(this.card?.cardNumber || '', [
        Validators.required,
        Validators.minLength(3),
      ]),
      name: new FormControl(this.card?.name || ''),
      dueDate: new FormControl(this.getDate() || ''),
      category: new FormControl(this.card?.category),
      fav: new FormControl(this.card?.fav || false),
      picture: new FormControl(this.card?.picture || ''),
      notes: new FormControl(this.card?.notes || ''),
      issuer: new FormControl(this.card?.issuer || ''),
    });
  }

  getAllCards(): void {
    this.cardService.getAllCards().subscribe((data) => (this.cards = data));
  }

  getDate() {
    if (this.card?.dueDate) {
      return formatDate(this.card.dueDate, 'yyyy-MM-dd', 'en-US');
    } else {
      return '';
    }
  }
}
