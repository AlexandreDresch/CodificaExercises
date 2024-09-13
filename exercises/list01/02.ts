// Crie um programa que classifica a idade de uma pessoa em categorias
// (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando
// uma estrutura de controle if-else.

function categorizeAge(age: number): string {
  if (age <= 0) {
    return "Idade inválida";
  } else if (age < 12) {
    return "Criança";
  } else if (age >= 12 && age < 18) {
    return "Adolescente";
  } else if (age >= 18 && age < 65) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

// Testando a função
console.log(categorizeAge(-5)); // Saída: Idade inválida
console.log(categorizeAge(0)); // Saída: Idade inválida
console.log(categorizeAge(11)); // Saída: Criança
console.log(categorizeAge(17)); // Saída: Adolescente
console.log(categorizeAge(64)); // Saída: Adulto
console.log(categorizeAge(80)); // Saída: Idoso
