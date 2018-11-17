import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgControlStatusGroup } from '@angular/forms';
import { AuthService } from '../servicos/auth.service';
import { CadastroService } from '../servicos/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin: NgForm;

  constructor(private authService: AuthService, private usuarioService: CadastroService) { }

  ngOnInit() {
  }

  onSubmit(){
    let email = this.formLogin.value.email;
    let senha = this.formLogin.value.senha;
    this.authService.LogIn(email, senha);
  }

}
