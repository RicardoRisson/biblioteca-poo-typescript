export class Emprestimo { 
  constructor(
    public livro: Livro,
    public dataEmprestimo: Date,
    public dataDevolucao: Date,
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
