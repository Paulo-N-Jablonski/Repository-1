import { Pessoa } from "./Pessoa"

export class Leitor extends Pessoa{
    profissao: string

    constructor(nome: string,
        cpf: string,
        profissao: string){
            super("","")
            this.profissao = profissao
        }
    
     getProfissao():string{
        return this.profissao
    }
}