import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrreryComponent } from './orrery/orrery.component';
import { GamesComponent } from './games/games.component';
import { CreditComponent } from './credit/credit.component';
import { PlanetComponent } from './planet/planet.component';

export const routes: Routes = [
        {path:'',component:HomeComponent},
        {path:'home',component:HomeComponent},
        {path:'orrery',component:OrreryComponent},
        {path:'games',component:GamesComponent},
        {path:'credit',component:CreditComponent},
        {path:'planet',component:PlanetComponent}
    
];
