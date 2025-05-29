import { Pessoa } from "./Pessoa";
import { Emprestimo } from "./Emprestimo";

export class Usuario extends Pessoa {
  emprestimos: Emprestimo[] = [];

  constructor(nome: string, email: string) {
    super(nome, email);
  }

  //Exemplo para a Substituição
  override apresentar(): string {
  return `Usuário: ${this.nome} | Email: ${this.email} | Empréstimos: ${this.emprestimos.length}`;
  }

  listarEmprestimos(): string[] {
    const cabecalho = this.apresentar(); // usa o método da classe Pessoa
    if (this.emprestimos.length === 0) {
      return ["Nenhum empréstimo registrado."];
    }
    const lista = this.emprestimos.map(
    (e, i) =>
      `${i + 1} - Livro: ${
        e.livro.titulo
      } | Data Empréstimo: ${e.dataEmprestimo.toLocaleDateString()} | Data Devolução: ${e.dataDevolucao.toLocaleDateString()}`
    );
    
    return [cabecalho, ...lista]; // inclui a apresentação antes da lista
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
