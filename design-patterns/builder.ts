// https://github.com/AvraamMavridis/Algorithms-Data-Structures-in-Typescript/blob/master/patterns/Builder.md

class Product2 {
  price: number | undefined;
  name: string | undefined;

  setPrice(price: number) {
    this.price = price;
  }

  setName(name: string) {
    this.name = name;
  }
}

class ProductBuilder {
  product: Product2;

  constructor() {
    this.product = new Product2();
  }

  setPrice(price: number): ProductBuilder {
    this.product.setPrice(price);
    return this;
  }

  setName(name: string): ProductBuilder {
    this.product.setName(name);
    return this;
  }

  getProduct(): Product2 {
    return this.product;
  }
}


const builder = new ProductBuilder();
builder.setName("Bread").setPrice(1);
const product = builder.getProduct();

console.assert(product.name === "Bread", "Wrong Implementation");
console.assert(product.price === 1, "Wrong Implementation");