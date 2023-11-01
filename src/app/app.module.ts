import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarFormComponent } from './componentes/avatar-form/avatar-form.component';
import { FormsModule } from '@angular/forms';
import { CriarContatoComponent } from './componentes/contatos/criar-contato/criar-contato.component';
import { ListarContatosComponent } from './componentes/contatos/listar-contatos/listar-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarFormComponent,
    CriarContatoComponent,
    ListarContatosComponent
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
