import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Cards } from '../data/cards';
import { ICard } from '../interfaces/card';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  urlAPI = 'https://625e7a57873d6798e2a821ec.mockapi.io';
  posts: any;
  cards: ICard[] = Cards;
  currentId: number | string = '';

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  httpOptions = {
    responseType: 'json' as const,
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addId(): string {
    return (this.currentId = new Date().getTime().toString());
  }

  addCard(card: ICard): Observable<ICard> {
    this.addId();

    return this.http.post<ICard>(
      this.urlAPI + '/cards',
      card,
      this.httpOptions
    );
    // .pipe(  retry(3),
    // catchError(this.errorService.handleError('addCard', card)));
  }

  getAllCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.urlAPI + '/cards');
  }

  getCardById(id: number | string): Observable<ICard> {
    return this.http.get<ICard>(this.urlAPI + '/cards/' + id);
  }

  deleteById(id: number | string): Observable<unknown> {
    return this.http.delete(this.urlAPI + '/cards/' + id, {
      params: { id: id },
    });
    // .pipe(catchError(this.errorService.handleError('deleteCard')));
  }

  updateCard(card: ICard): Observable<ICard> {
    return this.http.put<ICard>(
      this.urlAPI + '/cards/' + card.id,
      card,
      this.httpOptions
    );
    // .pipe(
    //   catchError(this.errorService.handleError(card))
    // );
  }
}
