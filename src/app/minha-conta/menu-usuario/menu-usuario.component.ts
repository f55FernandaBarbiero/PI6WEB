import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/modelo/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicos/auth.service';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  
  private usuario : Cliente;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  navegaAlterar(){
    this.router.navigate(["altera-dados"], {relativeTo: this.route});
  }

  navegaSenha(){
    this.router.navigate(["altera-senha"], {relativeTo: this.route});
  }
}
