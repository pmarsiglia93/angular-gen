import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

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
  {path:'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
