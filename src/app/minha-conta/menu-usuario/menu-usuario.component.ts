import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/modelo/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicos/auth.service';
import { CadastroService } from 'src/app/servicos/cadastro.service';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  
  private usuario : Cliente;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private usuarioService: CadastroService) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  navegaAlterar(){
    this.router.navigate(["altera-dados"], {relativeTo: this.route});
  }

  navegaSenha(){
    this.router.navigate(["altera-senha"], {relativeTo: this.route});
  }

  removeUsuario(){
    var r = confirm("Deseja mesmo remover o seu usuário?");
    if (r){
      this.usuarioService.removeUsuario(this.usuario)
        .subscribe(
          (data) => {
            alert("Seu usuário foi removido com sucesso. Deslogando da aplicação...");
            this.authService.Logoff();
          },
          (error) => {console.log(error)}
        )
    }
  }
}
