import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICard } from 'src/app/interfaces/card';
import { Categories } from 'src/app/data/cards';
import { CardService } from 'src/app/services/card.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardEditComponent implements OnInit {
  isAddMode: boolean = false;
  id: string = '';
  newCard!: FormGroup;

  constructor(
    protected cardService: CardService,
    protected router: Router,
    private route: ActivatedRoute
  ) {}
  categories: string[] = [];

  ngOnInit() {
    this.categories = Categories;

    if (this.route.snapshot.params['id']) {
      this.id = this.route.snapshot.params['id'];
    } else {
      this.isAddMode = !this.id;
      this.id = new Date().getTime().toString();
    }

    this.newCard = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      name: new FormControl(''),
      dueDate: new FormControl(''),
      category: new FormControl(''),
      fav: new FormControl(false),
      picture: new FormControl(''),
      notes: new FormControl(''),
      issuer: new FormControl(''),
    });
  }

  onSubmit({ value, valid }: { value: ICard; valid: boolean }) {
    if (this.newCard && valid) {
      console.log(value);
      this.cardService.addCard({ ...value, id: this.id });
      this.router.navigate(['cards']);
    } else {
    }
  }
}
