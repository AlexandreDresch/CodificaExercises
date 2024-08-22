// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

function generateFibonacciSequence(): void {
  const fibonacciSequence = [0, 1];
  let nextNumber = 1;

  for (let i = 2; i < 10; i++) {
    nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }

  console.log(fibonacciSequence);
}

// Testando a função
generateFibonacciSequence(); // Saída: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
