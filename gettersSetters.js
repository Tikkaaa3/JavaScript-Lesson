const person = {
  firstName: "Tikka",
  lastName: "Toggy",
  get fullName() {                                        // getter makes it possible to access properties
    return `${person.firstName} ${person.lastName}`       
  },
  set fullName(value) {                                   // setter makes changes in properties
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Tolga Kaptan"

console.log(person);
console.log(person.fullName);