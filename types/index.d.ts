export interface Car {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
}

export interface Book {
  titulo: string;
  autor: string;
  anoPublicacao: number;
  genero: string;
  editora?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Person {
  name: string;
  age: number;
  city: string;
}

export interface Student {
  nome: string;
  nota1: number;
  nota2: number;
}

export interface Employee {
  nome: string;
  cargo: string;
  salario: number;
}

export interface ProductWithoutQuantity extends Omit<Product, "quantity"> {}

export interface ProductWithoutId extends Omit<Product, "id"> {}

export interface Movie {
  titulo: string;
  diretor: string;
  anoLancamento: number;
}

export interface Client {
  nome: string;
  idade: number;
  cidade: string;
}

export interface Order {
  client: string;
  product: string;
  quantity: number;
}

export interface GroupedOrders {
  [key: string]: number;
}

export interface StockProduct {
  product: string;
  quantity: number;
  min: number;
}

export interface Cart {
  items: ProductWithoutId[];
}

export interface Company {
  departments: { [key: string]: Employee[] };
}

export interface Transaction {
  type: "entrada" | "saída";
  value: number;
}
