// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

function arithmeticMean() {
  const promptSync = require("prompt-sync")();

  let sum = 0;
  let count = 0;

  while (true) {
    const input = promptSync("Digite um número decimal (0 para sair): ");
    const userInput = parseFloat(input);

    if (isNaN(userInput)) {
      console.log("Entrada inválida. Por favor, digite um número decimal.");
      continue;
    }

    if (userInput === 0) {
      if (count === 0) {
        console.log("Nenhum número válido foi inserido.");
      } else {
        console.log(`Média aritmética: ${sum / count}`);
      }
      break;
    }

    sum += userInput;
    count++;
  }
}

// Testando a função
arithmeticMean(); // Saída: a média aritmética dos números fornecidos pelo usuário
