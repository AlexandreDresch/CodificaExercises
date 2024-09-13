// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

function sortNumbers(num1: number, num2: number): void {
  if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  console.log(`Números em ordem crescente: ${num1}, ${num2}`);
}

// Testando a função
sortNumbers(5, 3); // Saída: Números em ordem crescente: 3, 5
sortNumbers(10, 2); // Saída: Números em ordem crescente: 2, 10
sortNumbers(-3, -5); // Saída: Números em ordem crescente: -5, -3
sortNumbers(1.5, 2.7); // Saída: Números em ordem crescente: 1.5, 2.7
