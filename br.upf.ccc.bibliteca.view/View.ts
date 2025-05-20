import { Usuario } from "../br.upf.ccc.bibliteca.model/Usuario";
import { Emprestimo } from "../br.upf.ccc.bibliteca.model/Emprestimo";

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

    usuario.emprestimos.push(
      new Emprestimo(
        "O Senhor dos Anéis",
        new Date("2025-05-01"),
        new Date("2025-05-10")
      ),
      new Emprestimo("1984", new Date("2025-05-05"), new Date("2025-05-15"))
    );

    this.mostrarEmprestimos(usuario);
    this.mostrarMulta(usuario);
  }
}

if (require.main === module) {
  View.testeTerminal();
}
