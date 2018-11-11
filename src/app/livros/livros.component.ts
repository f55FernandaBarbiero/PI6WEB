import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../servicos/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
  providers: [LivrosService]
})
export class LivrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
