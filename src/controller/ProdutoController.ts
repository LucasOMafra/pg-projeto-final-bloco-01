import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    // Criação da coleção (array) de produtos
    private listaProdutos: Produto[] = [];
    private id: number = 0; // controle simples de IDs

    // Método para gerar IDs automáticos
    public gerarId(): number {
        return ++this.id;
    }

    // Cadastrar novo produto
    public cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("✅ Produto cadastrado com sucesso!");
    }

    // Listar todos os produtos
    public listarTodos(): void {
        this.listaProdutos.forEach(p => p.visualizar());
    }

    // Buscar produto por ID
    public procurarPorId(id: number): Produto | undefined {
        return this.listaProdutos.find(p => p.id === id);
    }

    // Atualizar produto existente
    public atualizar(produto: Produto): void {
        const index = this.listaProdutos.findIndex(p => p.id === produto.id);
        if (index !== -1) {
            this.listaProdutos[index] = produto;
            console.log("🔁 Produto atualizado com sucesso!");
        } else {
            console.log("❌ Produto não encontrado.");
        }
    }

    // Excluir produto
    public deletar(id: number): void {
        const index = this.listaProdutos.findIndex(p => p.id === id);
        if (index !== -1) {
            this.listaProdutos.splice(index, 1);
            console.log("🗑️ Produto excluído com sucesso!");
        } else {
            console.log("❌ Produto não encontrado.");
        }
    }
}
