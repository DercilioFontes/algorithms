// https://github.com/AvraamMavridis/Algorithms-Data-Structures-in-Typescript/blob/master/patterns/Factory.md

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Food extends Product {
  weight: number;

  constructor(name: string, price: number, weight: number = 0) {
    super(name, price);
    this.weight = weight;
  }
}

class Drink extends Product {
  ml: number;

  constructor(name: string, price: number, ml: number = 0) {
    super(name, price);
    this.ml = ml;
  }
}

class ProductFactory {
  static createProduct(
    type: "food" | "drink" | undefined,
    name: string,
    price: number,
    qnt?: number,
  ): Product {
    switch (type) {
      case "food":
        return new Food(name, price, qnt);
      case "drink":
        return new Drink(name, price, qnt);
      default:
        return new Product(name, price);
    }
  }
}

const bread = ProductFactory.createProduct("food", "Bread", 1, 100);
console.assert(bread instanceof Food, "Wrong implementation");
console.assert(bread instanceof Product, "Wrong implementation");
console.assert(!(bread instanceof Drink), "Wrong implementation");
