import { Emprestimo } from "./Emprestimo";
import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

let indiceEmprestimo:number = 1

export class Biblioteca{
    private nome:string
    private leitor: Array<Leitor>
    private livros:Array<Livro>
    private emprestimos:Array<Emprestimo>

    constructor(nome:string,
        leitor:Array<Leitor> = [],
        livros:Array<Livro> = [],
        emprestimos:Array<Emprestimo> = []){
            this.nome = nome
            this.leitor = leitor
            this.livros = livros
            this.emprestimos = emprestimos
        }

    getLivros(): Array<Livro>{
        return this.livros
    }

    addLivro(livro:Livro): void{
        this.livros.push(livro)
    }

    removeLivro(nome:string):void{
        for (let i:number = 0; i < this.livros.length; i++) {
            if(this.livros[i].getNome() === nome){
                this.livros.splice(i,1)
            }
        }
    }

    toString():string{
        
        let stringLivros:string = "";
        let stringEmprestimos:string = "";

        for(const livro of this.livros){
            stringLivros += livro.toString()
        }

        stringLivros += ""


        return `Nome: ${this.nome}\nLivros: ${stringLivros}\nEmprestimos: ${stringEmprestimos}`
    }

    addEmprestimo(emprestimos: Emprestimo): void{
        for (let i:number = 0; i < this.livros.length; i++) {
            if(this.livros[i].getNome() === ){
                this.emprestimos.push(new Emprestimo(leitor1,livro1,11042023))
            }
        }
    }

    removeEmprestimo(emprestimos: Emprestimo): void{
        for (let i:number = 0; i < this.livros.length; i++) {
            if(indiceEmprestimo === i){
                this.emprestimos.splice(i,1) 
            }
        }
    }

    addLeitor(leitor:Leitor): void{
        this.leitor.push(leitor)
    }
    
}