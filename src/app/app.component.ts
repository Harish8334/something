import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditComponent } from './credit/credit.component';
import { GamesComponent } from './games/games.component';
import { OrreryComponent } from './orrery/orrery.component';
import { PlanetComponent } from './planet/planet.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,RouterLink
    ,HomeComponent,CreditComponent,GamesComponent,OrreryComponent,PlanetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-project';
}
