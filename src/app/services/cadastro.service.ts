import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class CadastroService {

    private url = "http://localhost:8080/LivrariaVirtual/servicos/Usuario";

    constructor(private http: Http) {}

    insereUsuario(usuarios: any[]){
        return this.http.post(this.url,usuarios)
    }
}
