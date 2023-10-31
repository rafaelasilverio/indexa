import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.css']
})
export class CriarContatoComponent {

  contato = {
    id: '1',
    foto: '',
    nome: 'Anitta',
    telefone: '996777617',
    email: 'anita@gmail.com',
    aniversario: '2003-08-12',
    redesSociais: 'anitta.com',
    obs: 'prepara'
  }

  criarContato(){
    alert("Novo contato criado");
  }

  cancelar(){
    alert("cancelado");
  }

}
