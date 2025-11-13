import { Produto } from "./Produto";

// Classe ProdutoFisico herda de Produto e adiciona o atributo 'estoque'
export class ProdutoFisico extends Produto {

    private _estoque: number; // Quantidade de produtos disponíveis em estoque

    // Construtor que recebe os dados do produto e o estoque
    constructor(id: number, nome: string, categoria: string, preco: number, estoque: number) {
        super(id, nome, categoria, preco); // Chama o construtor da classe mãe (Produto)
        this._estoque = estoque;
    }

    // Getter para obter o valor do estoque
    public get estoque(): number {
        return this._estoque;
    }

    // Setter para atualizar o valor do estoque
    public set estoque(estoque: number) {
        this._estoque = estoque;
    }

    // Sobrescrita do método visualizar() da classe mãe
    public override visualizar(): void {
        super.visualizar(); // Exibe as informações básicas do produto
        console.log(`📦 Estoque disponível: ${this._estoque} unidades`);
        console.log("--------------------------------------\n");
    }
}
