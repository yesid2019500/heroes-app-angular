import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/herores.interfas';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroes: Heroes): string {
    if (!heroes.id && !heroes.alt_img) {
      return 'assets/no-image.png';
    } else if (heroes.alt_img) {
      return heroes.alt_img;
    } else {
      return `assets/heroes/${heroes.id}.jpg`;
    }
  }
}
