import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('Heros fetched successfuly');
    return heros;
  }
  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add('Heros fetched successfuly');
    return of(hero);
  }
}
