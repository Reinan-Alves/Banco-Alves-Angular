import { AppRoutingModule } from './app-routing.module';

import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NovaTranferenciaComponent } from './nova-transferencia/nova-tranferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { DepositoComponent } from './deposito/deposito.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent,
    ExtratoComponent,
    DepositoComponent
  ],
  imports: [BrowserModule,FormsModule,AppRoutingModule],
  providers: [

       {provide: LOCALE_ID, useValue: 'pt'},
       {provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
