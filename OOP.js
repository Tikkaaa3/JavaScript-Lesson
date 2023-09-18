class Person {
  constructor(name,age) {
    this.name = name;                       // you can name it like this._name = name; which means you shouldn't reach this var directly.
    this.age = age;
    this.job = ""
  }

  getName = () => {
    return this.name
  };

  getAge = () => {
    return this.age
  };

  setJob = (job) => {
    this.job = job;
  };

}

let Tikka = new Person("Tikka", 21);
console.log(Tikka.getName());

class House {
  constructor(address, rent, residents) {
    this.address = address;
    this.rent = rent;
    this.residents = residents;
  }

  getAddress = () => {
    return this.address
  };

  getRent = () => {
    return this.rent
  };

  getResidents = () => {
    return this.residents
  };

  addResidents = (resident) => {
    this.residents.push(resident)
  };
}

let Pedro = new Person("Pedro", 21);

let house = new House("bla bla USA", 10000, [Tikka, Pedro])
console.log(house.getResidents());

let Touka = new Person("Touka", 20);
house.addResidents(Touka);
Touka.setJob("Rabitto");                    // even though Touka has added to the house before setting her job,
console.log(house.getResidents());          // setJob changes refference, so you can see Touka's job in House class

class Programmer extends Person{                          // this means programmer is a person => programmer class has person props and methods
  constructor(name, age, company, salary, language){
    super(name,age)                                       // super sends name and age to person class
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = () => {
    console.log(`Hello, my name is ${this.getName()}! I work for ${this.company} and I love ${this.language}`);
  }
}

let Tolga = new Programmer("Tolga", 21, "RedHat", 36000, "JavaScript");
Tolga.sayHi();