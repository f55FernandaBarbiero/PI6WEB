import { Component, OnInit } from '@angular/core';
import { Livro } from '../../../modelo/livro';
import { LivrosService } from '../../servicos/livros.service';

@Component({
  selector: 'app-livros-listagem',
  templateUrl: './livros-listagem.component.html',
  styleUrls: ['./livros-listagem.component.css']
})
export class LivrosListagemComponent implements OnInit {

  livros: Array<Livro> = [];

  constructor(private livroService: LivrosService) { }

  ngOnInit() {
    this.livroService.buscaLivros()
    .subscribe(
      (response) => {
        const data = response.json();
        console.log(data);
        data.forEach(livro => {
          this.livros.push(livro);
        });
      },
      (error) => console.log(error)
    );
  }

  removeLivro(id: Number){
    let livro = this.livros.find(
      (l) => {return l.id === id; }
    );
    let indice = this.livros.indexOf(livro);
    this.livroService.deletaLivro(livro).subscribe(
      (response) => {
        alert('Livro Removido');
        this.livros.splice(indice,1);
      }
    ),
      (error) => console.log(error);
  }
}
