import { NovaTranferenciaComponent } from './nova-transferencia/nova-tranferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';  // ao digitar a rout, o vs code ja faz o auto complete do import e exporta a const routes com o array de rotas abaixo
import { DepositoComponent } from './deposito/deposito.component';

//array de rotas e nomeação das rotas
export const routes: Routes = [

  { path: '',redirectTo : 'extrato', pathMatch:'full'},// aqui faz um redirecionamento para que nao ocorra erro caso a caia em uma pagina vazia,neste caso sera redirecionado para extrato, e o comando pathMatch 'ful', indica a pagina toda
  { path: 'extrato', component: ExtratoComponent }, // nome dado ap caminho do  extratocomponent
  { path: 'nova-transferencia', component: NovaTranferenciaComponent}, //nome dado ao caminho do NovaTranferenciaComponent
  { path: 'deposito', component: DepositoComponent} //nome dado ao caminho do NovaTranferenciaComponent

]

@NgModule({

  imports:[RouterModule.forRoot(routes)], // importando as rotas e o caminho
  exports:[RouterModule]
})
export class AppRoutingModule{

}
