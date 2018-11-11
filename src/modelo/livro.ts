export class Livro{
    constructor(
        public id: Number = 0,
        public nome: string = '', 
        public autor: string = '', 
        public tipo: string = '',
        public preco: Number = 0, 
        public editora: string = '',
        public edicao: boolean = true,
        public isExcluido: boolean = false
    ) {}
}
