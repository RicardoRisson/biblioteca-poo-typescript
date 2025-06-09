import { Livro } from "./Livro";

export class Emprestimo {
  public dataRealDevolucao?: Date;

  constructor(
    public livro: Livro,
    public dataEmprestimo: Date,
    public dataDevolucao: Date
  ) {
    if (dataDevolucao < dataEmprestimo) {
      throw new Error(
        "A data de devolução não pode ser anterior à data de empréstimo."
      );
    }
  }

  static realizarEmprestimo(
    livro: Livro,
    dataEmprestimo: Date,
    dataDevolucao: Date
  ): { mensagem: string; emprestimo: Emprestimo | null } {
    if (livro.verificarDisponibilidade()) {
      const emprestimo = new Emprestimo(livro, dataEmprestimo, dataDevolucao);
      livro.marcarComoEmprestado();
      return {
        mensagem: `Empréstimo realizado com sucesso para o livro "${livro.titulo}".`,
        emprestimo: emprestimo,
      };
    } else {
      return {
        mensagem: `Erro: o livro "${livro.titulo}" já está emprestado.`,
        emprestimo: null,
      };
    }
  }

  registrarDevolucao(dataReal: Date): void {
    this.dataRealDevolucao = dataReal;
    this.livro.marcarComoDisponivel();
  }

  getMulta(dataAtual: Date = new Date()): number {
    const devolucaoEfetiva = this.dataRealDevolucao ?? dataAtual;
    if (devolucaoEfetiva <= this.dataDevolucao) {
      return 0;
    }
    const diasAtraso = Math.floor(
      (devolucaoEfetiva.getTime() - this.dataDevolucao.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return diasAtraso * 1.5;
  }
}
