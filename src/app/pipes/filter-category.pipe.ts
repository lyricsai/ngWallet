import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../interfaces/card';
import { Categories } from '../data/cards';

@Pipe({
  name: 'filterCategory',
})
export class FilterCategoryPipe implements PipeTransform {
  categories = Categories;

  transform(value: ICard[], category: string = ''): any {
    if (category === 'Select Category') {
      return value;
    } else {
      if (category && value) {
        return value.filter((value) => {
          return value.category === category;
        });
      }
    }
    return value;
  }
}
