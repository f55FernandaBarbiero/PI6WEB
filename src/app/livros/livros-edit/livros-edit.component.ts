import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivrosService } from '../../servicos/livros.service';
import { Livro } from '../../../modelo/livro';
import { Router, ActivatedRoute } from '@angular/router';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-livros-edit',
  templateUrl: './livros-edit.component.html',
  styleUrls: ['./livros-edit.component.css']
})
export class LivrosEditComponent implements OnInit {
  livro: Livro = new Livro();
  @ViewChild("formLivro") formLivro: NgForm;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private livrosService: LivrosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id){
      this.livrosService.buscaLivro(id)
        .subscribe(
          (response) => {
            const data = response.json();
            this.livro.id = data.id;
            this.formLivro.form.patchValue({
              nome: data.nome,
              autor: data.autor,
              genero: data.genero,
              preco: data.preco,
              editora: data.editora,
              caminho: data.caminho

            }),
            (error) => {console.log(error)}
              // data.editora,
              // true,
              // data.isExcluid
            console.log(this.formLivro);
          }
        );
    }
}

  downloadRelatorioLivro()
  {
    this.livrosService.downloadRelatorioLivro(this.txtMesIncial, this.txtMesFinal);
  }
  downloadRelatorioUsuario()
  {
    var mInicial = "0";
    var mFinal = "0";

    if (this.txtMesIncial == null || this.txtMesIncial == "")
    {
      mInicial = "1";
    }
    else {
      mInicial = this.txtMesIncial;
    }
     if (this.txtMesFinal == null || this.txtMesFinal == "")
    {
      mFinal = "1";
    }
    else {
      mFinal = this.txtMesFinal;
    }
    this.livrosService.downloadRelatorioUsuario(mInicial, mFinal);
  }
  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let formData = new FormData();
    formData.set('file', inputEl.files.item(0));
    return formData;
  }  

  
  onSubmit(){
    this.livro.nome = this.formLivro.value.nome;
    this.livro.autor = this.formLivro.value.autor;
    this.livro.editora = this.formLivro.value.editora;
    this.livro.genero = this.formLivro.value.genero;
    this.livro.preco = this.formLivro.value.preco;
    // this.livro.edicao = this.formLivro.value.edicao;

    if (this.livro.id == null){
      this.livrosService.insereLivro(this.livro)
      .subscribe(
        (response) => {
          console.log(this.livro);
          alert('Livro cadastrado!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(this.livro);
          console.log(error)
        },
        () => {
          this.livrosService.uploadLivro( this.upload() )
            .subscribe(
              (data) => {console.log("serviço realizou upload")},
              (error) => {console.log(error)}
            )
        }
      )
    }
    else
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
        },
        () => {
          this.livrosService.uploadLivro( this.upload() )
            .subscribe(
              (data) => {console.log("serviço realizou upload")},
              (error) => {console.log(error)}
            )
        }
      )      
    }
  }
}
