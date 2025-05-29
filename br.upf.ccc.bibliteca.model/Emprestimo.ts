import { Livro } from "./Livro";

export class Emprestimo { 
  constructor(
    public livro: Livro,
    public dataEmprestimo: Date,
    public dataDevolucao: Date, 
  ) {}

static realizarEmprestimo(livro: Livro, dataEmprestimo: Date, dataDevolucao: Date): { mensagem: string, emprestimo: Emprestimo | null } {
    if (livro.verificarDisponibilidade()) {
      const emprestimo = new Emprestimo(livro, dataEmprestimo, dataDevolucao);
      livro.marcarComoEmprestado();
      return {
        mensagem: `Empréstimo realizado com sucesso para o livro "${livro.titulo}".`,
        emprestimo: emprestimo
      };
    } else {
      return {
        mensagem: `Erro: o livro "${livro.titulo}" já está emprestado.`,
        emprestimo: null
      };
    }
  }
}
