import { Pessoa } from "./Pessoa"

export class Autor extends Pessoa{
    private dataNascimento:string
    private editora:string

    constructor(nome:string,
        dataNascimento:string,
        cpf:string,
        editora:string){
            super("","")
            this.dataNascimento = dataNascimento
            this.editora = editora
        }
}

