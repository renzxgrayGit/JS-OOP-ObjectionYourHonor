class Person {
  #name; #age;
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}

class Prosecutor extends Person {
  constructor(name, age) {
      super(name, age);
  }

  prosecute(defendant, case) {
      super(defendant, case);
  }
}

class Defendant extends Person {
  #case;
  constructor(name, age) {
      super(name, age);
  }
}

class Case extends Defendant {
  #title; #imprisonmentTerm; #ageLimit;
  constructor(title, years, months, days, minAge, maxAge) {
      this.title = title;
      this.years = years;
      this.months = months;
      this.days = days;
      this.minAge = minAge;
      this.maxAge = maxAge;
      this.imprisonmentTerm = imprisonmentTerm;
      this.ageLimit = ageLimit;
  }
}

class Trialcourt {
  initiateTrial(defendant, prosecutor) {
      this.defendant = defendant;
      this.prosecutor = prosecutor;
  }
}

/* // Define the Shape class
class Shape {
    #x; #y;
    constructor(x, y) {
      this.#x = x;
      this.#y = y;
    }
}

// Define the Circle class that extends Shape
class Circle extends Shape {
    #r;
    constructor(x, y, r) {
      super(x, y);
      this.#r = r;
    }
    area() {
      return this.#r * this.#r * Math.PI; // Fixed the formula (should be r * r * PI)
    }
}

// Instantiate a Circle object
const circle = new Circle(0, 0, 5); // Example coordinates (0, 0) and radius 5

// Console the area of the circle
console.log("Area of the circle:", circle.area());

let isTruthy = "Hello";
if (isTruthy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

class Person {
  static createAnonymous(gender){
       return "Anonymous " + gender; //sample code
  }
}
let anonymous = Person.createAnonymous("male");
console.log(anonymous); */