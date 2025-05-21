import { Pessoa } from "./Pessoa";
import { Emprestimo } from "./Emprestimo";

export class Usuario extends Pessoa {
  emprestimos: Emprestimo[] = [];

  constructor(nome: string, email: string) {
    super(nome, email);
  }

  listarEmprestimos(): string[] {
    if (this.emprestimos.length === 0) {
      return ["Nenhum empréstimo registrado."];
    }
    return this.emprestimos.map(
      (e, i) =>
        `${i + 1} - Livro: ${
          e.livro.titulo
        } | Data Empréstimo: ${e.dataEmprestimo.toLocaleDateString()} | Data Devolução: ${e.dataDevolucao.toLocaleDateString()}`
    );
  }

  verificarMulta(): number {
    const hoje = new Date();
    return this.emprestimos.reduce((total, emprestimo) => {
      if (emprestimo.dataDevolucao < hoje) {
        const diasAtraso = Math.floor(
          (hoje.getTime() - emprestimo.dataDevolucao.getTime()) /
            (1000 * 60 * 60 * 24)
        );
        return total + diasAtraso * 1.5;
      }
      return total;
    }, 0);
  }
}
