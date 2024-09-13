// Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

import { Product } from "../../types";

function filterProperties(
  product: Product,
  minValue: number
): Partial<Product> {
  const filteredProperties: Partial<Product> = {};

  for (const prop in product) {
    if (typeof product[prop] === "number" && product[prop] > minValue) {
      filteredProperties[prop] = product[prop];
    }
  }

  return filteredProperties;
}

function showProduct(product: Partial<Product>): void {
  console.log(product);
}

function main(): void {
  const product: Product = {
    id: 1,
    name: "Book",
    price: 12,
    quantity: 10,
  };

  const filteredProduct = filterProperties(product, 5);
  showProduct(filteredProduct);
}

// Testando a função:
main();
// Saída: { price: 12, quantity: 10 }
