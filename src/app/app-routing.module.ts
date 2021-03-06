import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  //Contrução de uma Rota.
  //O nome do Path sou eu que defino! (Melhor colocar parecido para facilitar a leitura).
  //Libero uma nova tag dentro do Angular.
  //Menu e Rodape não precisa de rota pois eles sempre vão estar lá.
  //Nova Tag AppComponent Html.

  //Forçando a pessoa a entrar no caminho entrar.
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},

  /*{path:'entraradm', component: EntrarComponent},
  */

  //Rotas
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},

  {path:'inicio', component: InicioComponent},
  {path:'tema', component: TemaComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
