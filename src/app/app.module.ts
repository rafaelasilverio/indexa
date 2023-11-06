import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarContatoComponent } from './componentes/contatos/criar-contato/criar-contato.component';
import { ListarContatosComponent } from './componentes/contatos/listar-contatos/listar-contatos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContatoComponent,
    ListarContatosComponent,
    BannerComponent,
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
