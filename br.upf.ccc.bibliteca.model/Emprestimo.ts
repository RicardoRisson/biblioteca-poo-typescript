export class Emprestimo {
  public dataEmprestimo: Date;
  public dataDevolucao?: Date;
  
  constructor(
    public livro: string,
    public dataEmprestimo: Date,
    public dataDevolucao: Date
  ) {}
  
  constructor(
      public livro: Livro,
      public usuario: Usuario
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

class Emprestimo {
    
}
