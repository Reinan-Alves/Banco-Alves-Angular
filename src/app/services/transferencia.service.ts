import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  saldoInsuficiente: boolean = false;

  saldo: number = 0;

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.atualizaSaldo(transferencia);
    if (this.saldoInsuficiente == false) {
      this.hidratar(transferencia);
      this.listaTransferencia.push(transferencia);
    }
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

  atualizaSaldo(transferencia: any) {
    if (transferencia.destino == 'Sua conta') {
      this.saldo += transferencia.valor;
      this.saldoInsuficiente = false;
    } else if (this.saldo < transferencia.valor) {
      this.saldoInsuficiente = true;
    } else {
      this.saldo -= transferencia.valor;
      this.saldoInsuficiente = false;
    }
    transferencia.saldo = this.saldo;
  }
}
