import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstrom';
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  hero = new Hero();

  heroes = HEROES;

  constructor() {
    this.hero.id = 1;
    this.hero.name = 'Windstorm';
  }

  ngOnInit() {
  }

}
