import { Usuario } from "../br.upf.ccc.bibliteca.model/Usuario";
import { Emprestimo } from "../br.upf.ccc.bibliteca.model/Emprestimo";
import { Autor } from "../br.upf.ccc.bibliteca.model/Autor";
import { Livro } from "../br.upf.ccc.bibliteca.model/Livro";

export class View {
  static mostrarEmprestimos(usuario: Usuario): void {
    console.log(`\n=====================`);
    const lista = usuario.listarEmprestimos();
    lista.forEach((item) => console.log(item));
  }

  static mostrarMulta(usuario: Usuario): void {
    const multa = usuario.verificarMulta();
    console.log(`\nMulta total: R$ ${multa.toFixed(2)}`);
  }

  static testeTerminal(): void {
    const usuario1 = new Usuario("Ricardo", "ricardo@example.com");
    const usuario2 = new Usuario("Octavio", "octavio@example.com");

    
    const autor1 = new Autor("J.R.R. Tolkien", "tolkien@example.com");
    const autor2 = new Autor("George Orwell", "orwell@example.com");
    const autor3 = new Autor(
      "Machado de Assis",
      "machado@example.com",
      "Considerado um dos maiores escritores brasileiros."
    );

    const livro1 = new Livro("O Senhor dos Anéis", autor1);
    const livro2 = new Livro("1984", autor2);
    const livro3 = new Livro("O Hobbit", autor1);
    const livro4 = new Livro("Dom Casmurro", autor3);
    const livros = [livro1, livro2, livro3, livro4];

    const { mensagem: msg1, emprestimo: emp1 } = Emprestimo.realizarEmprestimo(
      livro2,
      new Date(2025, 5, 5),
      new Date(2025, 6, 20)
    );
    console.log(msg1);
    if (emp1) usuario1.emprestimos.push(emp1);

    const { mensagem: msg2, emprestimo: emp2 } = Emprestimo.realizarEmprestimo(
      livro1,
      new Date(2025, 1, 29),
      new Date(2025, 6, 21)
    );
    console.log(msg2);
    if (emp2) usuario2.emprestimos.push(emp2);

    const { mensagem: msg3, emprestimo: emp3 } = Emprestimo.realizarEmprestimo(
      livro3,
      new Date(2025, 4, 22),
      new Date(2025, 4, 23)
    );
    console.log(msg3);
    if (emp3) {
      emp3.registrarDevolucao(new Date(2025, 4, 23)); // devolvido no prazo
      usuario2.emprestimos.push(emp3);
    }

    const { mensagem: msg4, emprestimo: emp4 } = Emprestimo.realizarEmprestimo(
      livro4,
      new Date(2025, 4, 22),
      new Date(2025, 5, 23)
    );
    console.log(msg4);
    if (emp4) {
      emp4.registrarDevolucao(new Date(2025, 6, 5)); // devolvido com atraso e gerou multa
      usuario2.emprestimos.push(emp4);
    }

    console.log("\n======= Catálogo de Livros =======\n");
    livros.forEach((livro) => {
      console.log(`Título: ${livro.titulo} | Autor: ${livro.autor.nome} | Biografia: ${livro.autor.biografia} | Disponível: ${livro.verificarDisponibilidade()}`);
    });

    console.log("\n======= Usuários e Empréstimos =======");
    this.mostrarEmprestimos(usuario1);
    this.mostrarMulta(usuario1);
    this.mostrarEmprestimos(usuario2);
    this.mostrarMulta(usuario2);
  }
}

if (require.main === module) {
  View.testeTerminal();
}
