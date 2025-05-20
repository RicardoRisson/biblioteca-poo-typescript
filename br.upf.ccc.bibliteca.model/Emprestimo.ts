export class Emprestimo {
  constructor(
    public livro: string,
    public dataEmprestimo: Date,
    public dataDevolucao: Date
  ) {}
}
