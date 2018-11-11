import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivrosService } from '../../servicos/livros.service';
import { Livro } from '../../../modelo/livro';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros-edit',
  templateUrl: './livros-edit.component.html',
  styleUrls: ['./livros-edit.component.css']
})
export class LivrosEditComponent implements OnInit {
  livro: Livro = new Livro();
  @ViewChild("formLivro") formLivro: NgForm;

  constructor(private livrosService: LivrosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id){
      this.livrosService.buscaLivro(id)
        .subscribe(
          (response) => {
            const data = response.json();
            this.livro.id = data.id;
            this.formLivro.setValue({
              nome: data.nome,
              autor: data.autor,
              tipo: data.genero,
              preco: data.preco,
              editora: data.editora
            }),
            (error) => {console.log(error)}
              // data.editora,
              // true,
              // data.isExcluid
            console.log(this.formLivro);
          }
        )
    }
  }

  onSubmit(){
    this.livro.nome = this.formLivro.value.nome;
    this.livro.autor = this.formLivro.value.autor;
    this.livro.editora = this.formLivro.value.editora;
    this.livro.tipo = this.formLivro.value.tipo;
    this.livro.preco = this.formLivro.value.preco;
    // this.livro.edicao = this.formLivro.value.edicao;

    if (this.livro.id == 0){
      this.livrosService.insereLivro(this.livro)
      .subscribe(
        (response) => {
          alert('Livro cadastrado!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(this.livro);
          console.log(error)
        }
      )
    }else
    {
      this.livrosService.atualizaLivro(this.livro)
      .subscribe(
        (response) => {
          alert('Livro atualizado com sucesso!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(this.livro);
          console.log(error);
        }
      )      
    }
  }
}
