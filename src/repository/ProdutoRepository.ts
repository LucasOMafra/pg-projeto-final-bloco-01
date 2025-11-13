// src/repository/ProdutoRepository.ts

import { Produto } from "../model/Produto";

// Interface que define as operações básicas para manipular produtos
export interface ProdutoRepository {

    // Cadastra um novo produto na lista
    cadastrar(produto: Produto): void;

    // Lista todos os produtos cadastrados
    listarTodos(): void;

    // Busca e exibe um produto pelo ID
    procurarPorId(id: number): void;

    // Atualiza as informações de um produto existente
    atualizar(produto: Produto): void;

    // Remove um produto da lista pelo ID
    deletar(id: number): void;
}
