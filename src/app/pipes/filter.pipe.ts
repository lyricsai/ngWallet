import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../interfaces/card';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: ICard[], letter: string = 'p'): any {
    if (letter && value) {
      return value.filter((value) => {
        return value.title[0].toUpperCase() === letter.toUpperCase();
      });
    }
    return value;
  }
}
