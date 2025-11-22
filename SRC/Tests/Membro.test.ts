import Membro from "../Membro";


describe("Teste Classe Membro", () => {
    it("Teste novo membro", () => {

    const membro = new Membro("Carlos", "Av. Brasil", "1234-5678", "M001", "1");

    expect(membro.nome).toBe("Carlos");
    expect(membro.endereço).toBe("Av. Brasil");
    expect(membro.telefone).toBe("1234-5678");
    expect(membro.nrMatricula).toBe("M001");
    expect(membro.id).toBe("1");
    });


    it("Deve alterar a matrícula do membro", () => {

    const membro = new Membro("Ana", "Rua das Flores", "8765-4321", "M002");

    membro.nrMatricula = "M003";

    expect(membro.nrMatricula).toBe("M003");    
    });


    it("Deve listar as informações do membro", () => {
    const membro = new Membro("Pedro", "Rua Central", "5555-5555", "M004", "2");
    
    const resultado = membro.listarMembro();

    expect(resultado).toBe("[ID: 2] Nome: Pedro, Matrícula: M004, Endereço: Rua Central, Telefone: 5555-5555");
});
}); 
