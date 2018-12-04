import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Livro } from "../../modelo/livro";

@Injectable()
export class LivrosService{
    constructor(private http: Http){}

    private url = "http://localhost:8080/LivrariaVirtual/servicos/Livro";
    private urlCompra = 'http://localhost:8080/LivrariaVirtual/servicos/Compra';

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

    uploadLivro(arquivo: any){
        return this.http.post(this.url + '/UploadLivro', arquivo);
    }

    donwloadLivro(id: number, nome: string){
        window.open(this.url + '/DownloadLivro?id=' + id + '&titulo=' + nome, '_blank');
        return null; // this.http.get(this.url + '/DownloadLivro?id=' + id + '&titulo=' + nome);
    }

    registraDownload(dadosCompra: any){
        return this.http.post(this.urlCompra, dadosCompra);
    }

    downloadFile(data) {
        const blob = new Blob([data]);
        const url= window.URL.createObjectURL(blob);
        window.open(url);
    }    

}