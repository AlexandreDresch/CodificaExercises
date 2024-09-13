// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

function printNumber(number: number): void {
  for (let i = 0; i < 10; i++) {
    console.log(number);
  }
}

// Testando a função
printNumber(5); // Saída: 5 5 5 5 5 5 5 5 5 5
printNumber(10); // Saída: 10 10 10 10 10 10 10 10 10 10