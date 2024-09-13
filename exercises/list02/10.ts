// Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

import { ProductWithoutId } from "../../types";

function calculateTotalSales(sales: ProductWithoutId[]): number {
  let totalSales = 0;

  sales.forEach((sale) => {
    totalSales += sale.quantity * sale.price;
  });

  return totalSales;
}

function showTotalSales(value: number): void {
  console.log(`Valor total de vendas: ${value}`);
}

function main(): void {
  const sales: ProductWithoutId[] = [
    { name: "Notebook", quantity: 2, price: 2500 },
    { name: "Mouse", quantity: 1, price: 100 },
    { name: "Teclado", quantity: 3, price: 50 },
  ];

  const totalSales = calculateTotalSales(sales);

  showTotalSales(totalSales);
}

// Testando a função:
main();

// Saída: Valor total de vendas: 5250
