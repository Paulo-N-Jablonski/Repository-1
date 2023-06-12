import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

export class Emprestimo{
    leitor:Leitor
    livro:Livro
    dataEntrega:number

    constructor(leitor:Leitor,
        livro:Livro,
        dataEntrega:number){
            this.leitor = leitor
            this.livro = livro
            this.dataEntrega = dataEntrega
        }
}