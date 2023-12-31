import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heros: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getHeros();
  }
  getHeros() {
    this.heroService.getHeroes().subscribe((heros) => (this.heros = heros));
  }
  onSelect(hero: Hero): void {
    this.messageService.add(`Selected hero ${hero.name}`);
  }
}
