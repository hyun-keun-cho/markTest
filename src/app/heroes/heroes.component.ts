import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heros';
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

  heroes = HEROES;

  // 2) 서비스를 생성자로 주입
  // private 붙이는 이유는 생성자에 private를 붙일 때, 로컬변수가 아닌 인스턴스 멤버로 등록하게 된다.
  constructor(private heroService: HeroService) {
    // this.selectedHero.id = 1;
    // this.selectedHero.name = 'Windstorm';
  }

  ngOnInit() {
    // 서비스 호출
    // 1) 잘못된 방법
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(item: Hero) {
    this.selectedHero = item;
  }

  onClear() {
    this.selectedHero = null;
  }

}
