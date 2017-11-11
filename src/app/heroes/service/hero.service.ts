import { Injectable } from '@angular/core';

import { Hero } from '../hero/hero';
import { HEROES } from '../mock/mock-heroes';
import { MessageService } from '../../message/service/message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  private static SERVICE_NAME: String = 'HeroService';

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`${HeroService.SERVICE_NAME}: fetched heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`${HeroService.SERVICE_NAME}: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
