import { Injectable } from '@angular/core';

import { Hero } from '../hero/hero';
import { HEROES } from '../mock/mock-heroes';
import { MessageService } from '../../message/service/message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  private static SERVICE_NAME = 'HeroService';
  private heroesUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`${HeroService.SERVICE_NAME}: fetched heroes`);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`${HeroService.SERVICE_NAME}: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }
}
