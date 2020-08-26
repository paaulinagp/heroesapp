import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  faArrowLeft,
  faSmileWink,
  faDizzy,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.heroesService.getHeroeByID(id).subscribe((res: HeroeModel) => {
        this.heroe = res;
        console.log(res);
      });
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.log('Formulario inválido');
      return;
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando info',
      icon: 'info',
      confirmButtonText: null,
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let request: Observable<any>;

    if (this.heroe.id) {
      request = this.heroesService.updateHeroe(this.heroe);
    } else {
      request = this.heroesService.createHeroe(this.heroe);
    }

    request.subscribe(() => {
      Swal.fire({
        title: this.heroe.name,
        text: 'Se actualizó correctamente',
        icon: 'success',
        confirmButtonText: 'ok',
      });
    });
  }
}
