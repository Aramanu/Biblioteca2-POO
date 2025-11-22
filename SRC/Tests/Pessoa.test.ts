import Pessoa from "../Pessoa";


class PessoaTeste extends Pessoa {
  public listarMembro(): string {
    // implementação fake só para testes 
    return "";
  }
}

describe("Teste da Classe Pessoa", () => {
  it("deve criar uma instância da classe filha e acessar os getters", () => {
    
    const pessoa = new PessoaTeste("João", "Rua X", "9999-9999", "123");
    
    expect(pessoa.nome).toBe("João");
    expect(pessoa.endereço).toBe("Rua X");
    expect(pessoa.telefone).toBe("9999-9999");
    expect(pessoa.id).toBe("123");
  });

  it("deve permitir id nulo", () => {
    
    const pessoa = new PessoaTeste("Maria", "Rua Y", "8888-8888");

    expect(pessoa.id).toBeNull();
  });

  it("deve obrigar a implementação do método abstrato listarMembro", () => {
    
    const pessoa = new PessoaTeste("Ana", "Rua Z", "7777-7777");

    // verifica se o método existe
    expect(typeof pessoa.listarMembro).toBe("function");
  });
});
