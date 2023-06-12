import { Livro } from "./Livro";

let x:number = 1
let indice:number = 0

export class Loja{
    private nome:string
    private livros:Array<Livro> = []

    constructor(nome:string,
        livros:Array<Livro> = []){
            this.nome = nome
            this.livros = livros
        }
    
     vendeLivro(livros:Livro):void{
        for (let i:number = 0; i < this.livros.length; i++) {
            if(i === indice){
                this.livros.splice(i,1)
            }
        }
    }
}

