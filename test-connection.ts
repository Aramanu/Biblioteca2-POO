import { LivroService } from "./Service/LivroService";
import { MembroService } from "./Service/MembroService";
import { EmprestimoService } from "./Service/EmprestimoService";

async function testarConexoes() {
  console.log("=== Teste de Conexões ===\n");

  try {
    console.log("1. Testando LivroService...");
    const livroService = new LivroService();
    const livros = await livroService.listar();
    console.log(`✅ Livros listados: ${livros.length} encontrados\n`);

    console.log("2. Testando MembroService...");
    const membroService = new MembroService();
    const membros = await membroService.listar();
    console.log(`✅ Membros listados: ${membros.length} encontrados\n`);

    console.log("3. Testando EmprestimoService...");
    const emprestimoService = new EmprestimoService();
    const emprestimos = await emprestimoService.listar();
    console.log(`✅ Empréstimos listados: ${emprestimos.length} encontrados\n`);

    console.log("4. Testando múltiplas requisições em sequência...");
    await livroService.listar();
    console.log("   - Livros (2ª vez)");
    await membroService.listar();
    console.log("   - Membros (2ª vez)");
    await emprestimoService.listar();
    console.log("   - Empréstimos (2ª vez)");
    await livroService.listar();
    console.log("   - Livros (3ª vez)");
    
    console.log("\n✅ TODOS OS TESTES PASSARAM!");
    console.log("A conexão está estável e funcionando corretamente.");
    
  } catch (error: any) {
    console.error("\n❌ ERRO:", error.message);
    console.error("Código do erro:", error.code);
    console.error("\nVerifique se o json-server está rodando:");
    console.error("npx json-server --watch db.json --port 3000");
  }
}

testarConexoes();
