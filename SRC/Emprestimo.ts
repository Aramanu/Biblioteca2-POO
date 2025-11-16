export default class Emprestimo {
  constructor(
    private _idLivro: string,
    private _idMembro: string,
    private _dataEmprestimo: string,
    private _dataDevolucao: string,
    public id: string | null = null
  ) {}
  get idLivro(): string {
    return this._idLivro;
  }
  get idMembro(): string {
    return this._idMembro;
  }
  get dataEmprestimo(): string {
    return this._dataEmprestimo;
  }
  get dataDevolucao(): string {
    return this._dataDevolucao;
  }
  set idLivro(idLivro: string) {
    this._idLivro = idLivro;
  }
  set idMembro(idMembro: string) {
    this._idMembro = idMembro;
  }
  set dataEmprestimo(dataEmprestimo: string) {
    this._dataEmprestimo = dataEmprestimo;
  }
  set dataDevolucao(dataDevolucao: string) {
    this._dataDevolucao = dataDevolucao;
  }

    public listarEmprestimo(): string {
    return `[ID: ${this.id}] ID Livro: ${this._idLivro}, ID Membro: ${this._idMembro}, Data Empréstimo: ${this._dataEmprestimo}, Data Devolução: ${this._dataDevolucao}`;
  }
  
}
