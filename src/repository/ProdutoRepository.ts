import { Produto } from "../model/Produto";

// Interface que define as operações básicas para manipular produtos
export interface ProdutoRepository {

    // Cadastra um novo produto na lista
    cadastrar(produto: Produto): void;

    // Lista todos os produtos cadastrados
    listarTodos(): void;

    // Busca e retorna um produto pelo ID
    procurarPorId(id: number): Produto | undefined;

    // Atualiza as informações de um produto existente
    atualizar(produto: Produto): void;

    // Remove um produto da lista pelo ID
    deletar(id: number): void;
}

