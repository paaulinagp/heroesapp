import { Component, OnInit } from '@angular/core';
import {
  faPlus,
  faSpinner,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  faPlus = faPlus;
  faSpinner = faSpinner;
  faExclamation = faExclamation;

  heroes: HeroeModel[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      console.log(res);
      this.heroes = res;
    });
  }
}
