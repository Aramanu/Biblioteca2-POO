export default abstract class Pessoa  {
  constructor(
    protected _nome: string,
    protected _endereço: string,
    protected _telefone: string,
    public id: string | null = null
  ) {}
    get nome(): string {
      return this._nome;
    }   
    
    get endereço(): string {
      return this._endereço;
    }
    
    get telefone(): string {
      return this._telefone;
    }

    public abstract listarMembro(): void;
}
