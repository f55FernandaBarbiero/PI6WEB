import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CadastroService } from "./cadastro.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    private token:  { 
                        email: string,
                        id: number,
                        isADM: boolean,
                        nome: string,
                        numeroDocumento: string,
                        senha: string,
                        dataNascimento: string
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
                        this.token = data;
                        alert('Bem vindo, ' + data.nome + '!');
                        this.router.navigate(['/']);
                    }
                },
                (error) => {
                    console.log(error);
                }
          );
    }

    Logoff(){
        this.token = null;
        this.router.navigate(['/']);
    }

    getUsername(){
        return this.token.nome;
    }

    getUser(){
        return this.token;
    }
}