import Livro from "../Livro";

describe("Classe Livro", () => {
    it("Deve criar uma instância do livro", () => {
        
        const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "978-0261102385", 1954, "Disponível", "L001");
        
        expect(livro.titulo).toBe("O Senhor dos Anéis");
        expect(livro.autor).toBe("J.R.R. Tolkien");
        expect(livro.isbn).toBe("978-0261102385");
        expect(livro.anoPublicacao).toBe(1954);
        expect(livro.status).toBe("Disponível");
        expect(livro.id).toBe("L001");
    });

    it("Deve alterar as propriedades do livro", () => {
        
        const livro = new Livro("1984", "George Orwell", "978-0451524935", 1949, "Emprestado");
        
        livro.titulo = "Nineteen Eighty-Four";
        livro.autor = "G. Orwell";
        livro.isbn = "978-0141036144";
        livro.anoPublicacao = 1948;
        livro.status = "Disponível";
        
        expect(livro.titulo).toBe("Nineteen Eighty-Four");
        expect(livro.autor).toBe("G. Orwell");
        expect(livro.isbn).toBe("978-0141036144");
        expect(livro.anoPublicacao).toBe(1948);
        expect(livro.status).toBe("Disponível");
    });

    it("Deve listar as informações do livro", () => {
        
        const livro = new Livro("Duna", "Frank Herbert", "978-0441013593", 1965, "Disponível", "L002"); 

        const info = livro.listarLivro();

        expect(info).toBe("[ID: L002] Título: Duna, Autor: Frank Herbert, ISBN: 978-0441013593, Ano de Publicação: 1965, Status: Disponível");
    });
});