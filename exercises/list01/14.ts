// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

function calculateFactorial(number: number): number | string {
  if (!Number.isInteger(number) || number < 0) {
    return "Erro: número inválido.";
  }

  let factorial = 1;

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

// Testando a função
console.log(calculateFactorial(5)); // Saída: 120
console.log(calculateFactorial(10)); // Saída: 3628800
console.log(calculateFactorial(0)); // Saída: 1
console.log(calculateFactorial(-5)); // Saída: Erro: número inválido.
console.log(calculateFactorial(1.5)); // Saída: Erro: número inválido.
console.log(calculateFactorial(5.5)); // Saída: Erro: número inválido.
