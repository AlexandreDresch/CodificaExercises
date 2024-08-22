// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

function applesPrice(number: number): string {
  const price = number < 12 ? number * 0.3 : number * 0.25;
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Testando a função
console.log(applesPrice(10)); // Saída: R$ 3,00
console.log(applesPrice(12)); // Saída: R$ 3,00
console.log(applesPrice(20)); // Saída: R$ 5,00
