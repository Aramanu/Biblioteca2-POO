import { AxiosInstance } from "axios";
import Membro from "../SRC/Membro";
import { api } from "./api";

export class MembroService {
    private api: AxiosInstance;
    private readonly API_URL = "/membros";
    constructor() {
        this.api = api;
    }   
    
    public async listar(): Promise<Membro[]> {
        const response = await this.api.get<Membro[]>(this.API_URL);
        return response.data.map(item => new Membro(item.nome, item.endereço, item.telefone, item.nrMatricula, item.id));
    }   

    public async adicionar(membro: Membro): Promise<Membro> {
        const response = await this.api.post<Membro>(this.API_URL, {
            nome: membro.nome,
            endereço: membro.endereço,
            telefone: membro.telefone,
            nrMatricula: membro.nrMatricula
        });
        const item = response.data;
        return new Membro(item.nome, item.endereço, item.telefone, item.nrMatricula, item.id);
    }

    public async atualizar(id : string, novosDados : any): Promise<Membro> {
        const url = `${this.API_URL}/${id}`;
        const response = await this.api.patch<Membro>(url, novosDados);
        const item = response.data;
        return new Membro(item.nome, item.endereço, item.telefone, item.nrMatricula, item.id);
    }

    public async deletar(id: string): Promise<void> {
        const url = `${this.API_URL}/${id}`;
        await this.api.delete(url);
    }
}