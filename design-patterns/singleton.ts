// https://github.com/AvraamMavridis/Algorithms-Data-Structures-in-Typescript/blob/master/patterns/Singleton.md

class Singleton {
  static instance: Singleton | undefined;
  instanceId: number | undefined;
  getInstance: () => Singleton | undefined = () => Singleton.instance;

  init(value: number) {
    this.instanceId = value;
    return this;
  }

  constructor(value: number) {
    if (Singleton.instance === undefined) {
      Singleton.instance = this.init(value);
    }

    return Singleton.instance;
  }
}

const object1 = new Singleton(10);
const object2 = new Singleton(30);
const object3 = new Singleton(15);
const object4 = new Singleton(20);

console.log({ object1, object2, object3, object4 });

console.assert(
  object1.instanceId === object2.instanceId,
  "Wrong implementation"
);
console.assert(
  object1.instanceId === object3.instanceId,
  "Wrong implementation"
);
console.assert(
  object1.instanceId === object4.instanceId,
  "Wrong implementation"
);
console.assert(
  object4.instanceId === object3.instanceId,
  "Wrong implementation"
);
