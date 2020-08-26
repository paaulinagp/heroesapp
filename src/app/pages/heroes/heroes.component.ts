import { Component, OnInit } from '@angular/core';
import {
  faPlus,
  faSpinner,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  faPlus = faPlus;
  faSpinner = faSpinner;
  faExclamation = faExclamation;
  constructor() {}

  ngOnInit(): void {}
}
