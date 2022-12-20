import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/herores.interfas';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesServices: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.router.url);

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.heroesServices.getHeroeById(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guardar() {
    // console.log(this.heroe);

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // actualizar
      this.heroesServices
        .updateHeroe(this.heroe)
        .subscribe((heroe) => console.log('update'));
    } else {
      // crear
      this.heroesServices.addHero(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]);
      });
    }
  }

  removeHeroe() {
    this.heroesServices.deleteHeroe(this.heroe.id!).subscribe((resp) => {
      this.router.navigate(['/heroes']);
    });
  }
}
