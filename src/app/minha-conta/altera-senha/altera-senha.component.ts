import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/modelo/cliente';
import { AuthService } from 'src/app/servicos/auth.service';
import { CadastroService } from 'src/app/servicos/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altera-senha',
  templateUrl: './altera-senha.component.html',
  styleUrls: ['./altera-senha.component.css']
})
export class AlteraSenhaComponent implements OnInit {
  @ViewChild("formSenha") formSenha: NgForm;

  private usuario: Cliente;

  private senhaAntigaVar: string = '';
  private novaSenhaVar: string = '';
  private validSenhaVar: string = '';

  constructor(private authService: AuthService, private usuarioService: CadastroService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  onSubmit(){
    if (this.usuario.senha != this.senhaAntigaVar)
      alert("Senha antiga incorreta!");
    else if (this.novaSenhaVar != this.validSenhaVar)
      alert("Senhas não estão batendo, digite corretamente");
    else
    {
      this.usuario.senha = this.novaSenhaVar;
      this.usuarioService.atualizaUsuario(this.usuario)
        .subscribe(
          (data) => {
            alert("Senha alterada!");
            this.router.navigate(["\minha-conta"]);
          },
          (error) => {
            console.log(error)
          }
        )
    }
      
  }

}
