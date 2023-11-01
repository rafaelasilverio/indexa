import { Component } from '@angular/core';
import { Contato } from 'src/app/interfaces/type';

@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.css'],
})
export class CriarContatoComponent {

  contato: Contato = {
    id: 0,
    foto: '',
    nome: 'raimundinha',
    telefone: '1233667899',
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

  onSubmit() {

    console.log('submetido 1');
    // this.contato = {
    //   id: 0,
    //   foto: '',
    //   nome: '',
    //   telefone: '',
    //   email: '',
    //   aniversario: '',
    //   redesSociais: '',
    //   obs: ''
    // };
      this.listaContatos.push({ ...this.contato });
      this.contato = {
        id: 0,
        foto: '',
        nome: '',
        telefone: '',
        email: '',
        aniversario: '',
        redesSociais: '',
        obs: ''
      };
      console.log('submetido 2');


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
      obs: ''
    };
  }
}
