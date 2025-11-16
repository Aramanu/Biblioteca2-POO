export default class Livro {
    constructor(
        private _titulo: string,
        private _autor: string,
        private _isbn: string,   
        private _anoPublicacao: number,
        private _status:string,
        public id: string | null = null
    ){}
    get titulo(): string {
        return this._titulo;
    }
    get autor(): string {
        return this._autor;
    }
    get isbn(): string {
        return this._isbn;
    }
    get anoPublicacao(): number {
        return this._anoPublicacao;
    }
    get status(): string {
        return this._status;
    }
    set titulo(titulo: string) {
        this._titulo = titulo;
    }
    set autor(autor: string) {
        this._autor = autor;
    }
    set isbn(isbn: string) {
        this._isbn = isbn;
    }
    set anoPublicacao(anoPublicacao: number) {
        this._anoPublicacao = anoPublicacao;
    }
    set status(status: string) {
        this._status = status;
    }
    

    public listarLivro(): string {
        return `[ID: ${this.id}] Título: ${this._titulo}, Autor: ${this._autor}, ISBN: ${this._isbn}, Ano de Publicação: ${this._anoPublicacao}, Status: ${this._status}`;
    }
}