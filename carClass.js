class Car {
    constructor(since, color, model) {
      this.since = since;
      this.color = color;
      this.model = model;

    }

    // Getter
    get age() {
        return this.calculAge();
    }
    // Method
    calculAge() {
        return Date().getFullYear() * this.since;
    }
  }

const car = new Car(2002,"Black","KIA");

alert("This car is ",car.age," years old");