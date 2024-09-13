// 4. Iterando Sobre Arrays de Objetos
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

import { Person } from "../../types";

function showPerson(people: Person[]): void {
  for (const person of people) {
    console.log(
      `Nome: ${person.name}, Idade: ${person.age}, Cidade: ${person.city}`
    );
  }
}

function main(): void {
  const people: Person[] = [
    { name: "Alice", age: 30, city: "São Paulo" },
    { name: "Alexandre", age: 25, city: "Rio de Janeiro" },
    { name: "André", age: 35, city: "Porto Alegre" },
  ];

  showPerson(people);
}

// Testando a função:
main();
// Saída: 
// Nome: Alice, Idade: 30, Cidade: São Paulo
// Nome: Alexandre, Idade: 25, Cidade: Rio de Janeiro
// Nome: André, Idade: 35, Cidade: Porto Alegre
