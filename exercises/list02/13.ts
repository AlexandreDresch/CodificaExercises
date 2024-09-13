// Implementando um Carrinho de Compras
// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

import { Cart } from "../../types";

function calculateTotal(cart: Cart): number {
  let total = 0;

  cart.items.forEach((item) => {
    total += item.price * item.quantity;
  });

  return total;
}

function showTotalValue(value: number): void {
  console.log(`Valor total do carrinho: ${value}`);
}

function main(): void {
  const cart: Cart = {
    items: [
      { name: "Livro 1", quantity: 2, price: 20 },
      { name: "Livro 2", quantity: 1, price: 15 },
    ],
  };

  const totalValue = calculateTotal(cart);

  showTotalValue(totalValue);
}

// Testando a função:
main();

// Saída: Valor total do carrinho: 55
