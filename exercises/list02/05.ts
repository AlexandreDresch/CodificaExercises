// Calculando Valores em Arrays de Objetos
// Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

import { Student } from "../../types";

function calculateAverage(students: Student[]): void {
  for (const student of students) {
    const average = (student.nota1 + student.nota2) / 2;
    console.log(`${student.nome}: Média: ${average}`);
  }
}

function main(): void {
  const students: Student[] = [
    { nome: "Alice", nota1: 8, nota2: 9 },
    { nome: "Alexandre", nota1: 7, nota2: 8 },
    { nome: "André", nota1: 9, nota2: 10 },
  ];

  calculateAverage(students);
}

// Testando a função:
main();

// Saída:
// Alice: Média: 8.5
// Alexandre: Média: 7.5
// André: Média: 9.5
