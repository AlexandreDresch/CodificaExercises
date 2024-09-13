// Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

import { Order, GroupedOrders } from "../../types";

function groupOrdersByClient(orders: Order[]): GroupedOrders {
  const groupedOrders: GroupedOrders = {};

  orders.forEach((order) => {
    if (groupedOrders[order.client]) {
      groupedOrders[order.client] += order.quantity;
    } else {
      groupedOrders[order.client] = order.quantity;
    }
  });

  return groupedOrders;
}

function showGroupedOrders(groupedOrders: GroupedOrders): void {
  console.log(JSON.stringify(groupedOrders));
}

function main(): void {
  const orders: Order[] = [
    { client: "João", product: "Notebook", quantity: 2 },
    { client: "Maria", product: "Mouse", quantity: 1 },
    { client: "João", product: "Teclado", quantity: 3 },
    { client: "Maria", product: "Notebook", quantity: 1 },
  ];

  const groupedOrders = groupOrdersByClient(orders);

  showGroupedOrders(groupedOrders);
}

// Testando a função:
main();

// Saída: { João: 5, Maria: 3 }
