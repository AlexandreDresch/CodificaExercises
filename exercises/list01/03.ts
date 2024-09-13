// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

function gradeClassifier(grade: number): string {
  if (grade < 0 || grade > 10) {
    return "Nota inválida";
  } else if (grade >= 7) {
    return "Aprovado";
  } else if (grade >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// Testando a função
console.log(gradeClassifier(9.5)); // Saída: Aprovado
console.log(gradeClassifier(4.8)); // Saída: Reprovado
console.log(gradeClassifier(2.5)); // Saída: Reprovado
console.log(gradeClassifier(-3)); // Saída: Nota inválida
console.log(gradeClassifier(11)); // Saída: Nota inválida
console.log(gradeClassifier(5)); // Saída: Recuperação
