// Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

import { Employee } from "../../types";

function filterBySalary(employees: Employee[], salaryThreshold: number): void {
  for (const employee of employees) {
    if (employee.salario > salaryThreshold) {
      console.log(
        `${employee.nome} - ${employee.cargo} - Salário: ${employee.salario}`
      );
    }
  }
}

function main(): void {
  const salaryThreshold = 4000;
  const employees: Employee[] = [
    { nome: "Alice", cargo: "Gerente", salario: 5000 },
    { nome: "Alexandre", cargo: "Engenheiro", salario: 3000 },
    { nome: "André", cargo: "Vendedor", salario: 2000 },
    { nome: "Carlos", cargo: "Gerente", salario: 6000 },
  ];

  filterBySalary(employees, salaryThreshold);
}

// Testando a função:
main();

// Saída:
// Alice - Gerente - Salário: 5000
// Carlos - Gerente - Salário: 6000