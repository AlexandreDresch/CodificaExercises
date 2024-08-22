// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

function calculateBMI(weight: number, height: number): string {
  const bmi = weight / height ** 2;

  if (bmi < 18.5) {
    return "Baixo peso.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Peso normal.";
  } else if (bmi >= 25 && bmi < 30) {
    return "Sobrepeso.";
  } else {
    return "Obesidade.";
  }
}

// Testando a função
console.log(calculateBMI(80, 1.8)); // Saída: Peso normal.
console.log(calculateBMI(12, 1.8)); // Saída: Baixo peso.
console.log(calculateBMI(250, 1.8)); // Saída: Obesidade.
console.log(calculateBMI(70, 1.7)); // Saída: Peso normal.
console.log(calculateBMI(80, 1.7)); // Saída: Sobrepeso.
console.log(calculateBMI(140, 1.6)); // Saída: Obesidade.
