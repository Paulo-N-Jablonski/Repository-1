import { Autor } from "./Autor";

export class Livro{
    nome:string
    autor:Autor
    dataLançamento:number
    genero:string

    constructor(nome:string,
        autor:Autor,
        dataLançamento:number,
        genero:string){
            this.nome = nome
            this.autor = autor
            this.dataLançamento = dataLançamento
            this.genero = genero
        }

        getNome():string{
            return this.nome
        }

        toString():string{
            return `Nome: ${this.nome}\nAutor: ${this.autor.toString()}\nData Lançamento: ${this.dataLançamento}\nGenero: ${this.genero}`
        }
}