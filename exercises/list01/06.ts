// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

function verifyTriangle(sideA: number, sideB: number, sideC: number): string {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    return "Os lados do triângulo devem ser maiores que zero.";
  } else if (
    sideA + sideB <= sideC ||
    sideA + sideC <= sideB ||
    sideB + sideC <= sideA
  ) {
    return "Os lados fornecidos não formam um triângulo.";
  } else if (sideA === sideB && sideB === sideC) {
    return "Triângulo equilátero.";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return "Triângulo isósceles.";
  } else {
    return "Triângulo escaleno.";
  }
}

// Testando a função
console.log(verifyTriangle(3, 4, 5)); // Saída: Triângulo escaleno.
console.log(verifyTriangle(5, 5, 5)); // Saída: Triângulo equilátero.
console.log(verifyTriangle(3, 3, 5)); // Saída: Triângulo isósceles.
console.log(verifyTriangle(1, 2, 3)); // Saída: Os lados fornecidos não formam um triângulo.
console.log(verifyTriangle(0, 5, 5)); // Saída: Os lados do triângulo devem ser maiores que zero.
