import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  faArrowLeft,
  faSmileWink,
  faDizzy,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faSmileWink = faSmileWink;
  faDizzy = faDizzy;
  faSave = faSave;

  heroe: HeroeModel = new HeroeModel();
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    this.heroesService.createHeroe(this.heroe).subscribe((res) => {
      console.log('respuesta: ', res);
    });
  }
}
