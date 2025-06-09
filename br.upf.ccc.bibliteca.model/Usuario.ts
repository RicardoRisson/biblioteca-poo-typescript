import { Pessoa } from "./Pessoa";
import { Emprestimo } from "./Emprestimo";

export class Usuario extends Pessoa {
  emprestimos: Emprestimo[] = [];

  constructor(nome: string, email: string) {
    super(nome, email);
  }

  override apresentar(): string {
    return `Usuário: ${this.nome} | Email: ${this.email} | Empréstimos: ${this.emprestimos.length}`;
  }

  listarEmprestimos(): string[] {
    const cabecalho = this.apresentar();
    if (this.emprestimos.length === 0) {
      return ["Nenhum empréstimo registrado."];
    }
    const lista = this.emprestimos.map(
      (e, i) =>
        `${i + 1} - Livro: ${
          e.livro.titulo
        } | Data Empréstimo: ${e.dataEmprestimo.toLocaleDateString()} | Data Devolução: ${e.dataDevolucao.toLocaleDateString()}`
    );

    return [cabecalho, ...lista];
  }

  verificarMulta(): number {
    return this.emprestimos.reduce((total, emprestimo) => {
      return total + emprestimo.getMulta();
    }, 0);
  }
}
