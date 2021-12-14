import { routes } from './../app-routing.module';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; //confere a importação da biclioteca

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  @Output() aotranferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {}//primeiro injeta a propriedade router no constructor

  transferir() {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aotranferir.emit (valorEmitir);
    this.service.adicionar(valorEmitir)

      this.router.navigateByUrl('extrato');// esta sintaxe permite a navegação passando por parametro a string da path de onde quero ir
    }
  }

