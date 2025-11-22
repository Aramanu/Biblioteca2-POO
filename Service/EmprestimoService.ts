import { AxiosInstance } from "axios";
import Emprestimo from "../SRC/Emprestimo";
import { api } from "./api";

export class EmprestimoService {
  private api: AxiosInstance;
  private readonly API_URL = "/emprestimos";
  constructor() {
    this.api = api;
  }

  public async listar(): Promise<Emprestimo[]> {
    const response = await this.api.get<Emprestimo[]>(this.API_URL);
    return response.data.map(
      (item) =>
        new Emprestimo(
          item.idLivro,
          item.idMembro,
          item.dataEmprestimo,
          item.dataDevolucao,
          item.id
        )
    );
  }

  public async adicionar(emprestimo: Emprestimo): Promise<Emprestimo> {
    const response = await this.api.post<Emprestimo>(this.API_URL, {
      idLivro: emprestimo.idLivro,
      idMembro: emprestimo.idMembro,
      dataEmprestimo: emprestimo.dataEmprestimo,
      dataDevolucao: emprestimo.dataDevolucao,
    });
    const item = response.data;
    return new Emprestimo(
      item.idLivro,
      item.idMembro,
      item.dataEmprestimo,
      item.dataDevolucao,
      item.id
    );
  }

  public async atualizar(id: string, novosDados: any): Promise<Emprestimo> {
    const url = `${this.API_URL}/${id}`;
    const response = await this.api.patch<Emprestimo>(url, novosDados);
    const item = response.data;
    return new Emprestimo(
      item.idLivro,
      item.idMembro,
      item.dataEmprestimo,
      item.dataDevolucao,
      item.id
    );
  }

  public async deletar(id: string): Promise<void> {
    const url = `${this.API_URL}/${id}`;
    await this.api.delete(url);
  }

  public async buscarPorId(id: string): Promise<Emprestimo | null> {
    const url = `${this.API_URL}/${id}`;
    const response = await this.api.get<Emprestimo>(url);

    if (!response.data) return null;

    const item = response.data;

    return new Emprestimo(
      item.idLivro,
      item.idMembro,
      item.dataEmprestimo,
      item.dataDevolucao,
      item.id
    );
  }
}