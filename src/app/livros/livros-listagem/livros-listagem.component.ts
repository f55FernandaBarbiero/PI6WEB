import { Component, OnInit } from '@angular/core';
import { Livro } from '../../../modelo/livro';
import { LivrosService } from '../../servicos/livros.service';
import { AuthService } from 'src/app/servicos/auth.service';
import { isNavigationCancelingError } from '@angular/router/src/shared';

@Component({
  selector: 'app-livros-listagem',
  templateUrl: './livros-listagem.component.html',
  styleUrls: ['./livros-listagem.component.css']
})
export class LivrosListagemComponent implements OnInit {

  livros: Array<Livro> = [];

  constructor(private livroService: LivrosService, private authService: AuthService) { }

  ngOnInit() {
    this.livroService.buscaLivros()
    .subscribe(
      (response) => {
        const data = response.json();
        console.log(data);
        data.forEach(livro => {
          this.livros.push(livro);;
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

  baixaLivro(livro: Livro){
    this.livroService.donwloadLivro(livro.id, livro.nome)
      .subscribe(
        (data) => {
          console.log("baixou?");          
        },
        (error) => {
          console.log(error);
          
        },
        () => {
          let dadosCompra = {
            livroID : livro.id,
            usuarioEmail : this.authService.getUser().email
          }
          this.livroService.registraDownload(dadosCompra)
            .subscribe(
              (data) => {
                console.log("compra cadastrada");                
              },
              (error) => {
                console.log(error);                
              }
            )
        }
      )
  }
}
