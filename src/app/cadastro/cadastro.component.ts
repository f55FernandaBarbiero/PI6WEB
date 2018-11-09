import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';
import { Cliente } from '../../modelo/cliente';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [CadastroService]
})
export class CadastroComponent implements OnInit {
  @ViewChild("formCliente") formCliente: NgForm;
  usuario : Cliente;

  constructor(private cadastroServico: CadastroService, private route: Router) { }

  ngOnInit() {
  }

  insereUsuario(){
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
