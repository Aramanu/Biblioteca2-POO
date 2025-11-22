import Livro from "./SRC/Livro";
import { LivroService } from "./Service/LivroService";
import { MembroService } from "./Service/MembroService";
import { EmprestimoService } from "./Service/EmprestimoService";
import Emprestimo from "./SRC/Emprestimo";
import Membro from "./SRC/Membro";
import Prompt from "prompt-sync";

const teclado = Prompt();

// Funções de Livro
const livroService = new LivroService();

async function listarLivros() {
    try {
        let livros = await livroService.listar();
        livros.forEach((livro: Livro) => 
            console.log(livro.listarLivro())
        );
    } catch (error: any) {
        console.error("Erro ao listar livros:", error.message);
        console.log("Verifique se o json-server está rodando: npx json-server --watch db.json --port 3000");
    }
}

async function adicionarLivro() {
    console.log("\n --- Adicionar Livro --- ");
    const titulo = teclado("Título: ").trim();
    const autor = teclado("Autor: ").trim();    
    const isbn = teclado("ISBN: ").trim();
    const anoPublicacao = parseInt(teclado("Ano de Publicação: ").trim());
    const status = teclado("Status: ").trim();
    const novoLivroData = new Livro(titulo, autor, isbn, anoPublicacao, status);
    const novoLivro = await livroService.adicionar(novoLivroData);  
    console.log("Livro adicionado com sucesso:");
    console.log("ID do Livro:", novoLivro.id);
}

async function atualizarLivro() {
  console.log("\n --- Atualizar Livro --- ");
  const id = teclado("ID do Livro a ser atualizado: ").trim();

  console.log("\nO que deseja alterar?");
  console.log("1. Título");
  console.log("2. Autor");
  console.log("3. ISBN");
  console.log("4. Ano de Publicação");
  console.log("5. Status");
  console.log("0. Cancelar");

  const opcao = teclado("Escolha uma opção: ").trim();
  if (opcao === "0") return;

  let campo: string = "";
  let valor: any;

  switch (opcao) {
    case "1":
      campo = "titulo";
      valor = teclado("Novo Título: ").trim();
      break;
    case "2":
      campo = "autor";
      valor = teclado("Novo Autor: ").trim();
      break;
    case "3":
      campo = "isbn";
      valor = teclado("Novo ISBN: ").trim();
      break;
    case "4":
      campo = "anoPublicacao";
      valor = parseInt(teclado("Novo Ano de Publicação: ").trim());
      break;
    case "5":
      campo = "status";
      valor = teclado("Novo Status: ").trim();
      break;
    default:
      console.log("Opção inválida.");
      return;
  }
  const novosDados = { [campo]: valor };

  await livroService.atualizar(id, novosDados);

  console.log("Livro atualizado com sucesso!");
}


async function deletarLivro() {
    console.log("\n --- Deletar Livro --- ");
    const id = teclado("ID do Livro a ser deletado: ").trim();
    await livroService.deletar(id);
    console.log("Livro deletado com sucesso.");
}

//Funções de Membro

const membroService = new MembroService();

async function listarMembros() {    
    try {
        let membros = await membroService.listar();
        membros.forEach((membro: Membro) => 
          console.log(membro.listarMembro())
        );
    } catch (error: any) {
        console.error("Erro ao listar membros:", error.message);
        console.log("Verifique se o json-server está rodando: npx json-server --watch db.json --port 3000");
    }
}

async function adicionarMembro() {
    try {
        console.log("\n --- Adicionar Membro --- ");
        const nome = teclado("Nome: ").trim();
        const endereço = teclado("Endereço: ").trim();    
        const telefone = teclado("Telefone: ").trim();
        const nrMatricula = teclado("Número de Matrícula: ").trim();    
        const novoMembroData = new Membro(nome, endereço, telefone, nrMatricula);
        const novoMembro = await membroService.adicionar(novoMembroData);  
        console.log("Membro adicionado com sucesso:");
        console.log(novoMembro.listarMembro());
    } catch (error: any) {
        console.error("Erro ao adicionar membro:", error.message);
        console.log("Verifique se o json-server está rodando: npx json-server --watch db.json --port 3000");
    }
}

async function atualizarMembro() {
    try {
        console.log("\n --- Atualizar Membro --- ");
        const id = teclado("ID do Membro a ser atualizado: ").trim();   
        const nome = teclado("Novo Nome: ").trim();
        const endereço = teclado("Novo Endereço: ").trim();    
        const telefone = teclado("Novo Telefone: ").trim();
        const nrMatricula = teclado("Novo Número de Matrícula: ").trim();
        const novosDados = {
            nome,
            endereço,
            telefone,
            nrMatricula
        };
        const membroAtualizado = await membroService.atualizar(id, novosDados);
        console.log("Membro atualizado com sucesso:");
        console.log(membroAtualizado.listarMembro());
    } catch (error: any) {
        console.error("Erro ao atualizar membro:", error.message);
        console.log("Verifique se o json-server está rodando: npx json-server --watch db.json --port 3000");
    }
}

async function deletarMembro() {
    try {
        console.log("\n --- Deletar Membro --- ");
        const id = teclado("ID do Membro a ser deletado: ").trim();
        await membroService.deletar(id);
        console.log("Membro deletado com sucesso.");
    } catch (error: any) {
        console.error("Erro ao deletar membro:", error.message);
        console.log("Verifique se o json-server está rodando: npx json-server --watch db.json --port 3000");
    }
}

 // Funçoes do Emprestimo

const emprestimoService = new EmprestimoService();

async function listarEmprestimos() {
    try {
        let emprestimos = await emprestimoService.listar();
        emprestimos.forEach((emprestimo: Emprestimo) => 
            console.log(emprestimo.listarEmprestimo())
       );
    } catch (error: any) {
        console.error("Erro ao listar empréstimos:", error.message);
        console.log("Verifique se o json-server está rodando: npx json-server --watch db.json --port 3000");
    }
}

async function adicionarEmprestimo() {
    console.log("\n --- Adicionar Empréstimo --- ");
    const idLivro = teclado("ID do Livro: ").trim();    
    const idMembro = teclado("ID do Membro: ").trim();    
    const dataEmprestimo = teclado("Data de Empréstimo (dd/mm/aaaa): ").trim();
    const dataDevolucao = teclado("Data de Devolução (dd/mm/aaaa): ").trim();
    const novoEmprestimoData = new Emprestimo(idLivro, idMembro, dataEmprestimo, dataDevolucao);
    const novoEmprestimo = await emprestimoService.adicionar(novoEmprestimoData);  
    console.log("Empréstimo adicionado com sucesso:");
    await livroService.atualizar(idLivro, { status: "Indisponivel" });
}

async function atualizarEmprestimo() {
  console.log("\n --- Devolução Empréstimo --- ");
  const id = teclado("ID do Empréstimo a ser atualizado: ").trim();

  const emprestimo = await emprestimoService.buscarPorId(id);
  if (!emprestimo) {
    console.log("Empréstimo não encontrado.");
    return;
  }
  const dataDevolucao = teclado("Nova Data de Devolução (dd/mm/aaaa): ").trim();
  await emprestimoService.atualizar(id, { dataDevolucao });
  console.log("Empréstimo atualizado com sucesso!");
  await livroService.atualizar(emprestimo.idLivro, { status: "Disponivel" });
}

async function deletarEmprestimo() {
    console.log("\n --- Deletar Empréstimo --- ");
    const id = teclado("ID do Empréstimo a ser deletado: ").trim();
    await emprestimoService.deletar(id);
    console.log("Empréstimo deletado com sucesso.");
}

async function listarEmprestimosAtivos() {
    console.log("\n --- Empréstimos Ativos --- ");
    let emprestimos = await emprestimoService.listar();
    emprestimos
        .filter((emprestimo) => !emprestimo.dataDevolucao)
        .forEach((emprestimo) => console.log(emprestimo.listarEmprestimo()));
}

// Menu Principal

async function menuPrincipal() {
    while (true) {
        console.log("\n+---------- Menu Principal ----------+");
        console.log("|1. Gerenciar Livros                 |");
        console.log("|2. Gerenciar Membros                |");
        console.log("|3. Gerenciar Empréstimos            |");
        console.log("|0. Sair                             |");
        console.log("+------------------------------------+");
        const escolha = teclado("Escolha uma opção: ").trim();
        if (escolha === "0") {
            break;
        }
        switch (escolha) {
            case "1":
                await menuLivros();
                break;
            case "2":
                await menuMembros();
                break;
            case "3":
                await menuEmprestimos();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
async function menuLivros() {
    while (true) {
        console.log("\n+---------- Menu Livros ----------+");   
        console.log("|1. Listar Livros                 |");
        console.log("|2. Adicionar Livro               |");
        console.log("|3. Atualizar Livro               |");
        console.log("|4. Deletar Livro                 |");
        console.log("|0. Voltar ao Menu Principal      |");
        console.log("+---------------------------------+");
        const escolha = teclado("Escolha uma opção: ").trim();
        if (escolha === "0") {
            break;
        }
        switch (escolha) {
            case "1":
                await listarLivros();
                break;
            case "2":
                await adicionarLivro();
                break;
            case "3":
                await atualizarLivro();
                break;
            case "4":
                await deletarLivro();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
async function menuMembros() {
    while (true) {
        console.log("\n+---------- Menu Membros ----------+");  
        console.log("|1. Listar Membros                 |");
        console.log("|2. Adicionar Membro               |");
        console.log("|3. Atualizar Membro               |");
        console.log("|4. Deletar Membro                 |");
        console.log("|0. Voltar ao Menu Principal       |");
        console.log("+----------------------------------+");
        const escolha = teclado("Escolha uma opção: ").trim();
        if (escolha === "0") {
            break;
        }
        switch (escolha) {
            case "1":
                await listarMembros();
                break;
            case "2":
                await adicionarMembro();
                break;
            case "3":
                await atualizarMembro();
                break;
            case "4":
                await deletarMembro();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
async function menuEmprestimos() {
    while (true) {
        console.log("\n+---------- Menu Empréstimos ----------+");  
        console.log("|1. Listar Empréstimos                |");
        console.log("|2. Adicionar Empréstimo              |");
        console.log("|3. Devolução Empréstimo              |");
        console.log("|4. Deletar Empréstimo                |");
        console.log("|5. Listar Empréstimos ativos         |");
        console.log("|0. Voltar ao Menu Principal          |");
        console.log("+-------------------------------------+");
        const escolha = teclado("Escolha uma opção: ").trim();
        if (escolha === "0") {
            break;
        }
        switch (escolha) {
            case "1":
                await listarEmprestimos();
                break;
            case "2":
                await adicionarEmprestimo();
                break;
            case "3":
                await atualizarEmprestimo();
                break;
            case "4":
                await deletarEmprestimo();
                break;
            case "5":
                await listarEmprestimosAtivos();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
menuPrincipal();