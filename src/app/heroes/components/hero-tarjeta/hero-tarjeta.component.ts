import { Component, Input } from '@angular/core';
import { Heroes } from '../../interfaces/herores.interfas';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styleUrls: ['./hero-tarjeta.component.css'],
})
export class HeroTarjetaComponent {
  constructor() {}

  @Input() heroes!: Heroes;
}
