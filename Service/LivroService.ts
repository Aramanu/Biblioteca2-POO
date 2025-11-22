import { AxiosInstance } from "axios";
import Livro from "../SRC/Livro";
import { api } from "./api";

export class LivroService {
    private api: AxiosInstance;
    private readonly API_URL = "/livros";
    constructor() {
        this.api = api;
    }

    public async listar(): Promise<Livro[]> {
        const response = await this.api.get<Livro[]>(this.API_URL);
        return response.data.map(item => new Livro(item.titulo, item.autor, item.isbn, item.anoPublicacao, item.status, item.id));
    }

    public async adicionar(livro: Livro): Promise<Livro> {
        const response = await this.api.post<Livro>(this.API_URL, {
            titulo: livro.titulo,
            autor: livro.autor,
            isbn: livro.isbn,
            anoPublicacao: livro.anoPublicacao,
            status: livro.status
        });
        const item = response.data;
        return new Livro(item.titulo, item.autor, item.isbn, item.anoPublicacao, item.status, item.id);
    }

    public async atualizar(id : string, novosDados : any): Promise<Livro> {
        const url = `${this.API_URL}/${id}`;
        const response = await this.api.patch<Livro>(url, novosDados);
        const item = response.data;
        return new Livro(item.titulo, item.autor, item.isbn, item.anoPublicacao, item.status);
    }
    public async deletar(id : string): Promise<void> {
        const url = `${this.API_URL}/${id}`;
        await this.api.delete(url);
    }   
}