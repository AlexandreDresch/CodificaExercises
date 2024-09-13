// Filtrando e Somando Valores
// Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

import { Transaction } from "../../types";

function calculateFinalBalance(transactions: Transaction[]): number {
  let balance = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "entrada") {
      balance += transaction.value;
    } else {
      balance -= transaction.value;
    }
  });

  return balance;
}

function showFinalBalanceValue(value: number): void {
  console.log(`Saldo final: R$ ${value.toFixed(2)}`);
}

function main() {
  const transactions: Transaction[] = [
    { type: "entrada", value: 100 },
    { type: "saída", value: 50 },
    { type: "entrada", value: 200 },
    { type: "saída", value: 75 },
  ];

  const finalBalance = calculateFinalBalance(transactions);

  showFinalBalanceValue(finalBalance);
}

// Testando a função:
main();

// Saída: Saldo final: R$ 175.00
