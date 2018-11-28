import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../servicos/cadastro.service';
import { AuthService } from '../servicos/auth.service';
import { Cliente } from 'src/modelo/cliente';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {
  private usuario : Cliente;
  constructor(private usuarioServico: CadastroService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  navegaAlterar(){
    this.router.navigate(["altera-dados"]);
  }

  navegaSenha(){
    this.router.navigate(["altera-senha"]);
  }
}
