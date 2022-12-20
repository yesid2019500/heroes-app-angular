import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes, Publisher } from '../../interfaces/herores.interfas';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  like!: number;
  unLike!: number;

  open = false;
  down = false;

  constructor(
    private heroresService: HeroesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  counter = 0;
  counterMenos = 0;

  heroe: Heroes[] = [];

  points: any = {
    // id: 1,
    like: this.counter,
    dislike: this.counterMenos,
  };

  ngOnInit(): void {
    this.heroresService.getPoint().subscribe((points) => {
      this.like = points.reduce((total, point) => total + point.like, 0);
      this.unLike = points.reduce((total, point) => total + point.dislike, 0);
    });

    this.heroresService.getHeroes().subscribe((heroes) => {
      this.heroe = heroes;
    });
  }

  saveN() {
    this.heroresService.addPonits(this.points).subscribe((heroe) => {
      this.router.navigate(['/heroes/listado', heroe.id]);
    });
  }

  votar() {
    this.points.like++;
    this.open = true;

    setTimeout(() => {
      this.saveN();
    }, 2000);
  }

  close() {
    this.open = false;
    this.down = false;
    window.location.reload();
  }

  dislike() {
    this.points.dislike++;
    this.down = true;

    setTimeout(() => {
      this.saveN();
    }, 2000);
  }
}
