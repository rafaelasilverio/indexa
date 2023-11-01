import { Component } from '@angular/core';
import { Contato } from 'src/app/interfaces/type';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.css']
})
export class ListarContatosComponent {
  listaContatos: Contato[] = [];

}
