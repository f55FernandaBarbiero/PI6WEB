import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CadastroService } from "./cadastro.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    private token:  { 
                    email: string,
                    senha: string
                    } = null;

    constructor(private http: Http, private usuarioService: CadastroService, private router: Router){}

    isAuthenticated(){
        return this.token != null;
    }

    LogIn(email: string, senha: string){
        this.usuarioService.buscaUsuarioLogin(email, senha)
          .subscribe(
              (retorno) => {
                    const data = retorno.json();
                    console.log(data);
                    if (!data)
                    {
                        this.token = null;
                        alert('Usuário não encontrado!');
                    }
                        
                    else
                    {
                        this.token = {email : data.email, senha : data.senha};
                        alert('Bem vindo, ' + data.nome + '!');
                        this.router.navigate(['/']);
                    }
              },
              (error) => console.log(error)
          );
    }
}