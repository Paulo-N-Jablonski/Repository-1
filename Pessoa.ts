export class Pessoa{
    private nome:string
    private cpf:string

    constructor(nome:string,
        cpf:string){
            this.nome = nome
            this.cpf = cpf
        }

        getNome():string{
            return this.nome
        }

        getCPF():string{
            return this.cpf
        }

        setNome(nome:string):void{
            this.nome = nome
        }

        toString():string{
            return `Nome: ${this.nome}\nCPF: ${this.cpf}`
        }
}