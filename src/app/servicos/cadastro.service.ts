import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../../modelo/cliente';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
@Injectable()
export class CadastroService {

    private url = 'http://localhost:8080/LivrariaVirtual/servicos/Usuario';

    constructor(private http: Http) {}

    insereUsuario(usuario: Cliente) {
        return this.http.post(this.url, usuario);
    }

    buscaUsuarioLogin(email: string, senha: string){
        return this.http.get(this.url + '?email=' + email + '&senha=' + senha);
    }
}
