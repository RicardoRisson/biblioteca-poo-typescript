// Livro associado a um autor
class Livro {
    private emprestado: boolean = false;

    constructor(public titulo: string, public autor: Autor) {}

    verificarDisponibilidade(): boolean {
        return !this.emprestado;
    }

    marcarComoEmprestado(): void {
        this.emprestado = true;
    }

    marcarComoDisponivel(): void {
        this.emprestado = false;
    }
}
