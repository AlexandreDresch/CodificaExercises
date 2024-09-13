// Manipulando Objetos Complexos
// Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

import { Company } from "../../types";

function displayEmployeeInfo(company: Company): void {
  for (const departmentName in company.departments) {
    console.log(`Departamento: ${departmentName}`);

    for (const employee of company.departments[departmentName]) {
      console.log(`Funcionário: ${employee.nome}`);
    }
  }
}

function main(): void {
  const company: Company = {
    departments: {
      "Departamento 1": [
        { nome: "Alice", cargo: "Gerente", salario: 5000 },
        { nome: "Alex", cargo: "Engenheiro", salario: 4000 },
      ],
      "Departamento 2": [
        { nome: "Alexandre", cargo: "Gerente", salario: 6000 },
        { nome: "José", cargo: "Analista", salario: 5500 },
      ],
    },
  };

  displayEmployeeInfo(company);
}

// Testando a função:
main();

// Saída:
// Departamento: Departamento 1
// Funcionário: Alice
// Funcionário: Alex
// Departamento: Departamento 2
// Funcionário: Alexandre
// Funcionário: José