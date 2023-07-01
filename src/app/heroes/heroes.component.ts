import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  selectedHero?: Hero;
  heros: Hero[] = [];
  getHeros() {
    this.heros = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
