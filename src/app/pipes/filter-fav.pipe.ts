import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../interfaces/card';

@Pipe({
  name: 'filterFav',
})
export class FilterFavPipe implements PipeTransform {
  transform(value: ICard[], favCheck: boolean): any {
    if (favCheck && value) {
      return value.filter((e) => e.fav);
    }
    return value;
  }
}
