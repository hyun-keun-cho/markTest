import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HEROES} from './mock-heros';
import {Hero} from './hero';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
