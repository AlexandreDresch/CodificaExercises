// Crie um programa que exibe a tabuada de um número fornecido pelo usuário
// (de 1 a 10) utilizando um loop for.

function displayMultiplicationTable() {
  const promptSync = require("prompt-sync")();

  const userInput = promptSync("Digite um número de 1 a 10: ");

  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    console.log("Entrada inválida. Tente novamente.");
    displayMultiplicationTable();
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${userInput} x ${i} = ${userInput * i}`);
  }
}

// Testando a função
displayMultiplicationTable(); // Saída: tabuada do número fornecido pelo usuário
