class Autor extends Pessoa {
    constructor(nome: string, email: string, public biografia?: string) {
        super(nome, email); // Chama o construtor da classe Pessoa
    }
}
