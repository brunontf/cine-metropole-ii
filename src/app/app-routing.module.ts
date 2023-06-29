import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddFilmeComponent } from './components/form-add-filme/form-add-filme.component';
import { ListaFilmesComponent } from './components/lista-filmes/lista-filmes.component';

const routes: Routes = [
  {path:"",component:ListaFilmesComponent},
  {path:"add_filme",component:FormAddFilmeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
