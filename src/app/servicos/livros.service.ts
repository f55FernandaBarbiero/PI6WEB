import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Livro } from "../../modelo/livro";

@Injectable()
export class LivrosService{
    constructor(private http: Http){}

    private url = "http://localhost:8080/LivrariaVirtual/servicos/Livro";

    buscaLivros(){
        return this.http.get(this.url + '?nome=');
    }

    buscaLivro(id: string){
        return this.http.get(this.url + '/id?id='+id)
    }

    insereLivro(livro: Livro){
        return this.http.post(this.url, livro);
    }

    atualizaLivro(livro: Livro){
        return this.http.put(this.url, livro);
    }

    deletaLivro(livro: Livro){
        return this.http.put(this.url + '/deletar', livro);
    }

}