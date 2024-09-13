// 1. Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

import { Car } from "../../types";

function carDetails(car: Car): void {
  for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`);
  }
}

function main(): void {
  const car: Car = {
    marca: "Chevrolet",
    modelo: "Opala",
    ano: 1974,
    cor: "vermelho",
  };

  carDetails(car);
}

// Testando a função:
main();
// Saída:
// marca: Chevrolet
// modelo: Opala
// ano: 1974
// cor: vermelho
