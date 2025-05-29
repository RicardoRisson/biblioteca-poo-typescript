export class Pessoa {
  constructor(public nome: string, public email: string) {}

  apresentar(): string {
    return `Nome: ${this.nome} | E-mail: ${this.email}`;
  }
}
