// Classe abstrata base - Produto genérico
export abstract class Produto {

    // Atributos principais do produto
    private _id: number;        // Identificador único do produto
    private _nome: string;      // Nome do produto
    private _categoria: string; // Categoria (ex: Eletrônicos, Roupas, etc.)
    private _preco: number;     // Preço do produto

    // Construtor que inicializa os atributos do produto
    constructor(id: number, nome: string, categoria: string, preco: number) {
        this._id = id;
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
    }

    // Getters e Setters para acessar e modificar os atributos

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    // Método comum a todos os tipos de produto
    // Exibe as informações básicas no console
    public visualizar(): void {
        console.log("\n--------------------------------------");
        console.log("🛒 Detalhes do Produto");
        console.log("--------------------------------------");
        console.log(`🆔 ID: ${this._id}`);
        console.log(`🏷️ Nome: ${this._nome}`);
        console.log(`📦 Categoria: ${this._categoria}`);
        console.log(`💰 Preço: R$ ${this._preco.toFixed(2)}`);
    }
}
