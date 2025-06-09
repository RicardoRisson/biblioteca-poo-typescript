# 📚 Sistema de Gerenciamento de Biblioteca

Este é um sistema simples de gerenciamento de biblioteca desenvolvido em **TypeScript**, como parte do trabalho final da disciplina de Programação Orientada a Objetos. O sistema simula o cadastro de usuários, autores, livros e empréstimos, aplicando conceitos fundamentais da orientação a objetos, como herança, associação e composição.

---

## 👥 Integrantes

- Ricardo
- Otávio

---

## 🎯 Objetivo

Criar um sistema orientado a objetos para gerenciar uma biblioteca, permitindo:

- Cadastro de usuários e autores.
- Cadastro e controle de livros.
- Realização de empréstimos.
- Verificação de disponibilidade dos livros.
- Cálculo de multas por atraso na devolução.

---

## 🧱 Estrutura de Classes

- `Pessoa`: Classe base com nome e e-mail.
- `Usuario`: Herda de Pessoa. Pode realizar empréstimos.
- `Autor`: Herda de Pessoa.
- `Livro`: Possui um autor e estado de disponibilidade.
- `Emprestimo`: Composição entre livro e usuário, com controle de datas.

---

## ⚙️ Funcionalidades

- `realizarEmprestimo()`: Verifica se o livro está disponível antes de emprestar.
- `verificarDisponibilidade()`: Informa se um livro está emprestado ou não.
- `verificarMulta()`: Calcula multas com base na data de devolução.
- `listarEmprestimos()`: Exibe todos os empréstimos de um usuário.

---

## 🧪 Execução do Projeto

Para executar os testes no terminal, é necessário ter o `Node.js` e o `ts-node` instalados. Em seguida, execute:

```bash
npm i
npx ts-node ./br.upf.ccc.bibliteca.view/View.ts
```

---

## Exemplo da execução

```bash
Empréstimo realizado com sucesso para o livro "1984".
Empréstimo realizado com sucesso para o livro "O Senhor dos Anéis".
Empréstimo realizado com sucesso para o livro "O Senhor dos Anéis: O reencontro".
Empréstimo realizado com sucesso para o livro "Dom Casmurro".

=====================
Usuário: Ricardo | Email: ricardo@example.com | Empréstimos: 1
1 - Livro: 1984 | Data Empréstimo: 05/06/2025 | Data Devolução: 20/07/2025

Multa total: R$ 0.00

=====================
Usuário: Octavio | Email: octavio@example.com | Empréstimos: 3
1 - Livro: O Senhor dos Anéis | Data Empréstimo: 15/06/2025 | Data Devolução: 02/07/2025
2 - Livro: O Senhor dos Anéis: O reencontro | Data Empréstimo: 22/05/2025 | Data Devolução: 23/05/2025
3 - Livro: Dom Casmurro | Data Empréstimo: 22/05/2025 | Data Devolução: 23/05/2025

Multa total: R$ 19.50
```
