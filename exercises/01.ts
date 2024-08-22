// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

function oddOrEven(number: number): string {
  if (number % 2 === 0) {
    return `${number} é par.`;
  } else {
    return `${number} é ímpar.`;
  }
}

// Testando a função
console.log(oddOrEven(10)); // Saída: 10 é par.
console.log(oddOrEven(7)); // Saída: 7 é ímpar.
