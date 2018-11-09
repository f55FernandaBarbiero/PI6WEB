import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario = {
    nome: '',
    email: '',
    senha: '',
    documento: '',
    dataNascimento: '',
    isADM: false
  };

  usuarios = [];

  constructor(private cadastroServico: CadastroService, private route: Router) { }

  ngOnInit() {
  }

  insereUsuario(){
    this.usuarios.push(this.usuario);
    return this.cadastroServico.insereUsuario(this.usuarios)
      .subscribe(
        (response) => {
          console.log(response);
          alert('Usuário Cadastrado!');
          this.route.navigate(['/']);
        },
        (error) => console.log(error)
      );
  }
}
