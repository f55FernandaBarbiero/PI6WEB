import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CadastroService } from 'src/app/servicos/cadastro.service';
import { AuthService } from 'src/app/servicos/auth.service';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/modelo/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  @ViewChild("formEdicao") formEdicao: NgForm;
  private usuario: Cliente;
  private senhaAntiga: string = '';
  private novaSenha: string = '';
  private validSenha: string = '';
  constructor(private usuarioService: CadastroService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  onSubmit(){
    console.log(this.formEdicao);
    console.log(this.usuario);
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
