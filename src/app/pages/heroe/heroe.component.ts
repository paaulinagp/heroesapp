import { Component, OnInit } from '@angular/core';
import {
  faArrowLeft,
  faSmileWink,
  faDizzy,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
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
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(form);
  }
}
