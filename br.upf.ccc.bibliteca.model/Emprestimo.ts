import { Livro } from "./Livro"; // se estiver em arquivo separado

export class Emprestimo {
  public dataEmprestimo: Date;
  public dataDevolucao?: Date;
  
  constructor(
    public livro: Livro,
    public dataDevolucao: Date
  ) {
    this.dataEmprestimo = new Date();
    this.dataDevolucao = dataDevolucao;
  }

  realizarEmprestimo(): string {
      if (this.livro.verificarDisponibilidade()) {
          this.livro.marcarComoEmprestado();
          return `Empréstimo realizado com sucesso para o livro "${this.livro.titulo}"`;
      } else {
          return `Erro: o livro "${this.livro.titulo}" já está emprestado.`;
      }
  }
}
