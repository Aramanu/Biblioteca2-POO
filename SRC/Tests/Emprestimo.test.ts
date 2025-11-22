import Emprestimo from "../Emprestimo";

describe("Classe Emprestimo", () => {
    it("Deve criar uma instância do empréstimo", () => {
        const emprestimo = new Emprestimo("L001", "M001", "2024-01-01", "2024-01-15", "E001");

        expect(emprestimo.idLivro).toBe("L001");    
        expect(emprestimo.idMembro).toBe("M001");
        expect(emprestimo.dataEmprestimo).toBe("2024-01-01");
        expect(emprestimo.dataDevolucao).toBe("2024-01-15");
        expect(emprestimo.id).toBe("E001");
    });

    it("Deve alterar as propriedades do empréstimo", () => {
    
        const emprestimo = new Emprestimo("L002", "M002", "2024-02-01", "2024-02-15");
    
        emprestimo.idLivro = "L003";
        emprestimo.idMembro = "M003";
        emprestimo.dataEmprestimo = "2024-03-01";
        emprestimo.dataDevolucao = "2024-03-15";
    
        expect(emprestimo.idLivro).toBe("L003");    
        expect(emprestimo.idMembro).toBe("M003");
        expect(emprestimo.dataEmprestimo).toBe("2024-03-01");
        expect(emprestimo.dataDevolucao).toBe("2024-03-15");
    });


    it("Deve listar as informações do empréstimo", () => {
        const emprestimo = new Emprestimo("L004", "M004", "2024-04-01", "2024-04-15", "E002");
        const info = emprestimo.listarEmprestimo();
        expect(info).toBe("[ID: E002] ID Livro: L004, ID Membro: M004, Data Empréstimo: 2024-04-01, Data Devolução: 2024-04-15");
    });
});