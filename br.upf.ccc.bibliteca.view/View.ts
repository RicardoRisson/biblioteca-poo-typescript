import { Usuario } from "../br.upf.ccc.bibliteca.model/Usuario";
import { Emprestimo } from "../br.upf.ccc.bibliteca.model/Emprestimo";
import { Autor } from "../br.upf.ccc.bibliteca.model/Autor";
import { Livro } from "../br.upf.ccc.bibliteca.model/Livro";

export class View {
  static mostrarEmprestimos(usuario: Usuario): void {
    console.log(`\nEmpréstimos de ${usuario.nome}:`);
    const lista = usuario.listarEmprestimos();
    lista.forEach((item) => console.log(item));
  }

  static mostrarMulta(usuario: Usuario): void {
    const multa = usuario.verificarMulta();
    console.log(`\nMulta total: R$ ${multa.toFixed(2)}`);
  }

  static testeTerminal(): void {
    const usuario = new Usuario("Ricardo", "ricardo@example.com");

    const autor1 = new Autor("J.R.R. Tolkien", "tolkien@example.com");
    const autor2 = new Autor("George Orwell", "orwell@example.com");

    const livro1 = new Livro("O Senhor dos Anéis", autor1);
    const livro2 = new Livro("1984", autor2);

    usuario.emprestimos.push(
      new Emprestimo(
        livro1,
        new Date("2025-05-01"),
        new Date("2025-05-10")
      ),
      new Emprestimo(livro2, new Date("2025-05-05"), new Date("2025-05-15"))
    );

    this.mostrarEmprestimos(usuario);
    this.mostrarMulta(usuario);
  }
}

if (require.main === module) {
  View.testeTerminal();
}
