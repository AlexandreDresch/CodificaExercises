// Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

import { Client } from "../../types";

function countOldClients(clients: Client[]): number {
  let count = 0;

  clients.forEach((client) => {
    if (client.idade > 30) {
      count++;
    }
  });

  return count;
}

function showClientCount(count: number): void {
  console.log(`Quantidade de clientes com mais de 30 anos: ${count}`);
}

function main(): void {
  const clients: Client[] = [
    { nome: "Alice", idade: 28, cidade: "Cidade 1" },
    { nome: "Bob", idade: 32, cidade: "Cidade 2" },
    { nome: "Charlie", idade: 25, cidade: "Cidade 3" },
    { nome: "David", idade: 35, cidade: "Cidade 4" },
    { nome: "Eve", idade: 27, cidade: "Cidade 5" },
  ];

  const clientCount = countOldClients(clients);

  showClientCount(clientCount);
}

// Testando a função:
main();

// Saída: Quantidade de clientes com mais de 30 anos: 2
