import { Autor } from "./Autor";
import { Livro } from "./Livro";
import { Leitor } from "./Leitor";
import { Loja } from "./Loja";
import { Emprestimo } from "./Emprestimo";
import { Biblioteca } from "./Biblioteca";
import { Pessoa } from "./Pessoa";

let autor1:Autor = new Autor("Fernando","12071994","123.456.789-00","Fernando Editoras 2.0");
let autor2:Autor = new Autor("Cleiton","06021999","987.654.321-00","Raimundo Nosferatu");

let livro1 = new Livro("Livro de Fernando (1)",autor1,2011,"Documentário");
let livro2 = new Livro("Livro de Cleiton (1)",autor2,2015,"Infantil");

let leitor1:Leitor = new Leitor("Roberto","123.456.789-00","Pedreiro Digital");
let leitor2:Leitor = new Leitor("Pedro","987.654.321-00","Programador");

let loja1 = new Loja("Compra e Venda de Livros Usados Rafael Silva",[livro1, livro2]);

let emprestimo1 = new Emprestimo(leitor1,livro1,11052023);
let emprestimo2 = new Emprestimo(leitor2,livro2,23032022);

let bibliotecaMunicipal = new Biblioteca("Biblioteca Municipal de Cachoeirinha");

bibliotecaMunicipal.addLivro(livro1)
bibliotecaMunicipal.addLivro(livro2)

console.log(bibliotecaMunicipal.toString())

bibliotecaMunicipal.removeLivro("Livro de Cleiton (1)")

console.log(bibliotecaMunicipal.toString())

let pessoas:Array<Pessoa> = [leitor1, leitor2, autor1, autor2]
let leitor = pessoas[0] as Leitor
for (const Pessoa of pessoas) {
    if(pessoas[0] instanceof Leitor){
        pessoas[0].getProfissao()
    }
}