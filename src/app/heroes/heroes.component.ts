import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

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

  heroes: Hero[];

  // 2) 서비스를 생성자로 주입
  // private 붙이는 이유는 생성자에 private를 붙일 때, 로컬변수가 아닌 인스턴스 멤버로 등록하게 된다.
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(item: Hero) {
    this.selectedHero = item;
  }

  onClear() {
    this.selectedHero = null;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
