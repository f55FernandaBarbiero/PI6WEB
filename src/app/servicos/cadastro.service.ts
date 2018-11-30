import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../../modelo/cliente';
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

    atualizaUsuario(usuario: Cliente){
        return this.http.put(this.url, usuario);
    }

    removeUsuario(usuario: Cliente){
        return this.http.put(this.url + '/deletar', usuario);
    }
}
