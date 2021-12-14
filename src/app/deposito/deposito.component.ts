import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.scss'],
})
export class DepositoComponent {
  @Output() aoDepositar = new EventEmitter<any>();
  valor: number = 0;
  destino: string = 'Sua conta';
  saldo:number=0;

  constructor(private service: TransferenciaService, private router: Router) {} //primeiro injeta a propriedade router no constructor

  depositar() {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoDepositar.emit(valorEmitir);
    this.service.adicionar(valorEmitir);
    this.router.navigateByUrl('extrato'); // esta sintaxe permite a navegação passando por parametro a string da path de onde quero ir
  }

}
