// Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

import { ProductWithoutQuantity } from "../../types";

function applyDiscount(products: ProductWithoutQuantity[]): void {
  products.forEach((product) => {
    product.price = product.price * 0.9;
    console.log(`Novo preço do produto ${product.name}: ${product.price}`);
  });
}

function main(): void {
  const products: ProductWithoutQuantity[] = [
    { id: 1, name: "Livro 1", price: 20 },
    { id: 2, name: "Livro 2", price: 30 },
    { id: 3, name: "Livro 3", price: 40 },
  ];

  applyDiscount(products);
}

// Testando a função:
main();

// Saída:
// Novo preço do produto Livro 1: 18
// Novo preço do produto Livro 2: 27
// Novo preço do produto Livro 3: 36
