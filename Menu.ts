import * as readlineSync from "readline-sync";
import { ProdutoController } from "./src/controller/ProdutoController";
import { ProdutoFisico } from "./src/model/ProdutoFisico";

// ===== Configuração de cores =====
const cor = {
  reset: "\x1b[0m",
  lilas: "\x1b[35m",
};

// ===== Função para exibir o menu =====
export function exibirMenu(): void {
  console.clear();
  console.log(cor.lilas);
  console.log("======================================================");
  console.log("                 🛍️  E-COMMERCE SYSTEM                ");
  console.log("======================================================");
  console.log(" [1] ➜ Cadastrar Produto");
  console.log(" [2] ➜ Listar Produtos");
  console.log(" [3] ➜ Alterar Produto");
  console.log(" [4] ➜ Excluir Produto");
  console.log(" [5] ➜ Sair");
  console.log("======================================================");
  console.log(cor.reset);
}

// ===== Criando instância do controller =====
const controller = new ProdutoController();

// ===== Função principal =====
function main() {
  while (true) {
    exibirMenu();

    // 💜 Entrada também em lilás
    const opcao = readlineSync.questionInt(`${cor.lilas}Escolha uma opção: ${cor.reset}`);

    switch (opcao) {
      case 1:
        // ===== CADASTRAR PRODUTO =====
        console.log(cor.lilas, "\n📝 Cadastrar Produto", cor.reset);

        const nome = readlineSync.question("Nome do produto: ");
        const categoria = readlineSync.question("Categoria do produto: ");
        const preco = readlineSync.questionFloat("Preço do produto: R$ ");
        const estoque = readlineSync.questionInt("Quantidade em estoque: ");

        const novoProduto = new ProdutoFisico(controller.gerarId(), nome, categoria, preco, estoque);
        controller.cadastrar(novoProduto);
        break;

      case 2:
        // ===== LISTAR PRODUTOS =====
        console.log(cor.lilas, "\n📋 Listando Produtos...", cor.reset);
        controller.listarTodos();
        break;

      case 3:
        // ===== ALTERAR PRODUTO =====
        console.log(cor.lilas, "\n✏️ Alterar Produto", cor.reset);
        const idAlterar = readlineSync.questionInt("Digite o ID do produto que deseja alterar: ");

          const produtoAlterar = controller.procurarPorId(idAlterar);
          if (produtoAlterar) {
          produtoAlterar.nome = readlineSync.question("Novo nome: ", { defaultInput: produtoAlterar.nome });
          produtoAlterar.categoria = readlineSync.question("Nova categoria: ", { defaultInput: produtoAlterar.categoria });
          produtoAlterar.preco = readlineSync.questionFloat("Novo preço: R$ ", { defaultInput: produtoAlterar.preco.toString() });
          // @ts-ignore - ProdutoFisico possui estoque
          produtoAlterar.estoque = readlineSync.questionInt("Novo estoque: ", { defaultInput: produtoAlterar.estoque });

          controller.atualizar(produtoAlterar);
        } else {
          console.log(cor.lilas, "❌ Produto não encontrado!", cor.reset);
        }
        break;

      case 4:
        // ===== EXCLUIR PRODUTO =====
        console.log(cor.lilas, "\n🗑️ Excluir Produto", cor.reset);
        const idExcluir = readlineSync.questionInt("Digite o ID do produto que deseja excluir: ");
        controller.deletar(idExcluir);
        break;

      case 5:
        // ===== SAIR DO SISTEMA =====
        console.log(cor.lilas, "\n👋 Saindo do sistema... Até logo!", cor.reset);
        process.exit(0);

      default:
        console.log(cor.lilas, "\n❌ Opção inválida! Tente novamente.", cor.reset);
    }

    readlineSync.question(cor.lilas + "\nPressione ENTER para voltar ao menu..." + cor.reset);
  }
}

// ===== Executar menu =====
main();
