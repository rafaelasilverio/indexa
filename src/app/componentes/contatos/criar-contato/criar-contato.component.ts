import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from 'src/app/interfaces/type';

@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.css'],
})
export class CriarContatoComponent{

  constructor(){}

  contato: Contato = {
    foto: '',
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redesSociais: '',
    obs: '',
  };

  listaContatos: Contato[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (reader.result) {
          this.contato.foto = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(formulario: NgForm) {
    if(formulario.valid){
      this.listaContatos.push({ ...this.contato });
      this.contato = {
        id: 0,
        foto: '',
        nome: '',
        telefone: '',
        email: '',
        aniversario: '',
        redesSociais: '',
        obs: '',
      };
    } else {
      console.log(formulario.controls)
    }
  }

  cancelar() {
    this.contato = {
      id: 0,
      foto: '',
      nome: '',
      telefone: '',
      email: '',
      aniversario: '',
      redesSociais: '',
      obs: '',
    };
  }
}
