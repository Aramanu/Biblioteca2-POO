import axios, {AxiosInstance} from "axios";
import Emprestimo from "../SRC/Emprestimo";
import http from "http";

export class EmprestimoService {
  private api: AxiosInstance;
  private readonly API_URL = "http://localhost:3000/emprestimos";
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000",
      httpAgent: new http.Agent({ keepAlive: false }),
      timeout: 5000,
    });
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