export class Emprestimo {
  public dataEmprestimo: Date;
  public dataDevolucao?: Date;
  
  constructor(
    public livro: string,
    public dataDevolucao: Date
  ) {
    this.dataEmprestimo = new Date();
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
