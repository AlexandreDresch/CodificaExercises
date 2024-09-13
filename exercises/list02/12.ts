// Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

import { StockProduct } from "../../types";

function updateStock(products: StockProduct[]): void {
  products.forEach((product) => {
    if (product.quantity < product.min) {
      product.quantity *= 2;
      console.log(
        `Duplicando quantidade do produto ${product.product} para ${product.quantity}`
      );
    }
  });
}

function main(): void {
  const products: StockProduct[] = [
    { product: "Livro 1", quantity: 10, min: 5 },
    { product: "Livro 2", quantity: 8, min: 7 },
    { product: "Livro 3", quantity: 6, min: 10 },
  ];

  updateStock(products);
}

// Testando a função:
main();

// Saída:
// Duplicando quantidade do produto Livro 3 para 12