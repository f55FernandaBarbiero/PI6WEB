import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastroService } from '../servicos/cadastro.service';
import { Router } from '@angular/router';
import { Cliente } from '../../modelo/cliente';
import { NgForm} from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: []
})
export class CadastroComponent implements OnInit {
  @ViewChild('formCliente') formCliente: NgForm;
  usuario: Cliente;

  constructor(private cadastroServico: CadastroService, private route: Router) {}

  ngOnInit() {
    this.usuario = new Cliente(
      0,
      '',
      '',
      '',
      '',
      '',
      false
    );
  }

  insereUsuario() {
    this.usuario.numeroDocumento = this.formCliente.value.documento;
    this.usuario.nome = this.formCliente.value.nome;
    this.usuario.email = this.formCliente.value.email;
    this.usuario.senha = this.formCliente.value.senha;
    this.usuario.dataNascimento = this.formCliente.value.nascimento;

     return this.cadastroServico.insereUsuario(this.usuario)
       .subscribe(
         (response) => {
           console.log(response);
           alert('Usuário Cadastrado!');
           this.formCliente.reset();
           this.route.navigate(['/']);
         },
         (error) => console.log(error)
     );
  }
}
