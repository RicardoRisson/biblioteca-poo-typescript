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
