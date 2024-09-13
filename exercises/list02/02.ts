// Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

import { Book } from "../../types";

function verifyAndAddPublisher(book: Book): void {
  let hasPublisher = false;

  for (const prop in book) {
    if (prop === "editora") {
      hasPublisher = true;
      break;
    }
  }

  if (!hasPublisher) {
    book.editora = getAnonymousPublisher();
  }
}

function getAnonymousPublisher(): string {
  return "Editora Anônima";
}

function showBook(book: Book): void {
  console.log(book);
}

function main(): void {
  const book: Book = {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    anoPublicacao: 1953,
    genero: "Ficção Distópica",
  };

  verifyAndAddPublisher(book);
  showBook(book);
}

// Testando a função:
main();
// Saída:
// {
//     titulo: 'Fahrenheit 451',
//     autor: 'Ray Bradbury',
//     anoPublicacao: 1953,
//     genero: 'Ficção Distópica',
//     editora: 'Editora Anônima'
// }
