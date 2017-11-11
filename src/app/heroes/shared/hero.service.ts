import { Injectable } from '@angular/core';

import { Hero } from '../hero/hero';
import { HEROES } from '../mock/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
