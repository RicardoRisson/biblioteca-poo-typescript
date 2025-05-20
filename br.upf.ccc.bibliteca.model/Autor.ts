class Autor extends Pessoa {
    constructor(nome: string, email: string, public biografia?: string) { //biografia com ? quer dizer que não é obrigatório na Instancia
        super(nome, email); // Chama o construtor da classe Pessoa
    }
}
