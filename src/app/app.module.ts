import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContatoComponent } from './componentes/form-contato/form-contato.component';
import { ListaContatosComponent } from './componentes/lista-contatos/lista-contatos.component';
import { AvatarFormComponent } from './componentes/avatar-form/avatar-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormContatoComponent,
    ListaContatosComponent,
    AvatarFormComponent
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
