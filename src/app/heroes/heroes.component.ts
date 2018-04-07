import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heros';
import { HeroService } from '../hero.service';

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
  selectedHero: Hero;

  heroes = HEROES;

  constructor(private heroService: HeroService) {
    // this.selectedHero.id = 1;
    // this.selectedHero.name = 'Windstorm';
  }

  ngOnInit() {
  }

  onSelect(item: Hero) {
    this.selectedHero = item;
  }

  onClear() {
    this.selectedHero = null;
  }

}
