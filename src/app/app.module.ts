import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContatosComponent } from './componentes/lista-contatos/lista-contatos.component';
import { AvatarFormComponent } from './componentes/avatar-form/avatar-form.component';
import { FormsModule } from '@angular/forms';
import { CriarContatoComponent } from './componentes/contatos/criar-contato/criar-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContatosComponent,
    AvatarFormComponent,
    CriarContatoComponent
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
