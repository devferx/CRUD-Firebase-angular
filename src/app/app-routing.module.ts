import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'heroes' },
{path: 'heroes', component:HeroesComponent},
{path: 'heroe/:id',component:HeroeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
