import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../../modelo/cliente';
@Injectable()
export class CadastroService {

    private url = "http://localhost:8080/LivrariaVirtual/servicos/Usuario";

    constructor(private http: Http) {}

    insereUsuario(usuario: Cliente){
        return this.http.post(this.url,usuario)
    }
}
