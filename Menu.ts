import * as readlineSync from "readline-sync";

const cor = {
  reset: "\x1b[0m",
  lilas: "\x1b[35m",
};

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

function main() {
  while (true) {
    exibirMenu();
    
    // 💜 Entrada também em lilás
    const opcao = readlineSync.questionInt(`${cor.lilas}Escolha uma opção: ${cor.reset}`);

    switch (opcao) {
      case 1:
        console.log(cor.lilas, "\n📝 Cadastrar Produto selecionado!", cor.reset);
        break;
      case 2:
        console.log(cor.lilas, "\n📋 Listando Produtos...", cor.reset);
        break;
      case 3:
        console.log(cor.lilas, "\n✏️ Alterar Produto selecionado!", cor.reset);
        break;
      case 4:
        console.log(cor.lilas, "\n🗑️ Excluir Produto selecionado!", cor.reset);
        break;
      case 5:
        console.log(cor.lilas, "\n👋 Saindo do sistema... Até logo!", cor.reset);
        process.exit(0);
      default:
        console.log(cor.lilas, "\n❌ Opção inválida! Tente novamente.", cor.reset);
    }

    readlineSync.question(cor.lilas + "\nPressione ENTER para voltar ao menu..." + cor.reset);
  }
}

main();