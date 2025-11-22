import Pessoa from "./Pessoa"

export default class Membro extends Pessoa {
    constructor(
        nome: string,
        endereço: string,
        telefone: string,
        private _nrMatricula: string,
        id:  string | null = null
    ){
        super(nome, endereço, telefone, id);
    } 

    get nrMatricula(): string {
        return this._nrMatricula;   
    }

    set nrMatricula(nrMatricula: string) {
        this._nrMatricula = nrMatricula;
    }

    public listarMembro(): string {
        return `[ID: ${this.id}] Nome: ${this._nome}, Matrícula: ${this._nrMatricula}, Endereço: ${this._endereço}, Telefone: ${this._telefone}`;
    }
}