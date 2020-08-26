import { Component, OnInit } from '@angular/core';
import {
  faPlus,
  faSpinner,
  faExclamation,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

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
  faPen = faPen;
  faTrash = faTrash;

  heroes: HeroeModel[] = [];

  loader: boolean;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.loader = true;
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res;
      this.loader = false;
    });
  }

  deleteHeroe(heroe: HeroeModel, index: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Se eliminará el héroe ${heroe.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.heroes.splice(index, 1);
        this.heroesService.deleteHeroe(heroe.id).subscribe();
        Swal.fire(
          'Eliminado',
          `El héroe ${heroe.name} ha sido eliminado`,
          'success'
        );
      }
    });
  }
}
