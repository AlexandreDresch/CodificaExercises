// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const promptSync = require("prompt-sync")();

function sumNumbers(): number {
  let totalSum = 0;

  for (let i = 1; i <= 5; i++) {
    const userInput = promptSync(`Digite o ${i}º número: `);

    const number = parseFloat(userInput);
    if (!isNaN(number)) {
      totalSum += number;
    } else {
      console.log("Entrada inválida. Tente novamente.");
      i--;
    }
  }

  return totalSum;
}

// Testando a função
console.log(`A soma total dos números digitados é: ${sumNumbers()}`); // Saída: a soma total dos números digitados
