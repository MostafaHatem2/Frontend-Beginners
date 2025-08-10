// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}

let carOne = new Car("MG", 2022, 42e5);
let carTwo = new Car("Marcides", 2019, 2.6e6);
let carThree = new Car("BMW", 2020, 2e6);

console.log(carOne);
console.log(carOne.run());

// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
