import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/data/cards';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() cardFilterTitle = new EventEmitter<string>();
  @Output() cardFilterCategory = new EventEmitter<string>();
  selectedCategory: string = '';
  categories: string[] = Categories;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  filterByTitle(value: string) {
    this.cardFilterTitle.emit(value);
  }

  filterByCategory($event: any) {
    this.cardFilterCategory.emit($event.target.value);
  }
}
