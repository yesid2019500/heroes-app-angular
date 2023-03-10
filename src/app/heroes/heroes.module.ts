import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RouterModule } from '@angular/router';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroTarjetaComponent } from './components/hero-tarjeta/hero-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroTarjetaComponent,
    ImagenPipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
})
export class HeroesModule {}
