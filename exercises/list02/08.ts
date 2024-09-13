// Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

import { Movie } from "../../types";

function createTitleArray(movies: Movie[]): string[] {
  const titles: string[] = [];

  movies.forEach((movie) => {
    titles.push(movie.titulo);
  });

  return titles;
}

function showMovieTitles(titles: string[]): void {
  titles.forEach((title) => {
    console.log(title);
  });
}

function main(): void {
  const movies: Movie[] = [
    { titulo: "Toy Story", diretor: "Lewis Carroll", anoLancamento: 1995 },
    { titulo: "Star Wars", diretor: "George Lucas", anoLancamento: 1977 },
  ];

  const titles = createTitleArray(movies);
  showMovieTitles(titles);
}

// Testando a função:
main();

// Saída:
// Toy Story
// Star Wars
