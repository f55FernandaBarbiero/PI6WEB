import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CadastroService } from 'src/app/servicos/cadastro.service';
import { AuthService } from 'src/app/servicos/auth.service';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/modelo/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altera-dados',
  templateUrl: './altera-dados.component.html',
  styleUrls: ['./altera-dados.component.css']
})
export class EditUsuarioComponent implements OnInit {
  @ViewChild("formEdicao") formEdicao: NgForm;
  private usuario: Cliente;
  private senhaAntigaVar: string = '';
  private novaSenhaVar: string = '';
  private validSenhaVar: string = '';
  constructor(private usuarioService: CadastroService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  onSubmit(){
    if (this.novaSenhaVar != '' || this.validSenhaVar != '' || this.senhaAntigaVar != ''){
      if (this.usuario.senha != this.senhaAntigaVar){
        alert("Senha antiga incorreta!");
        return;
      }
      else if (this.novaSenhaVar != this.validSenhaVar){
        alert("Senhas não estão batendo, digite corretamente");
        return;
      }else{
        this.usuario.senha = this.novaSenhaVar;
      }
    }
    this.usuarioService.atualizaUsuario(this.usuario)
    .subscribe(
      (data) => {
        alert("Dados alterados com sucesso!")
        this.router.navigate(["/minha-conta"]);
      }
    ),
    (error) => {
      console.log(error);
    }
  }

}
