const alphabet = ["a","b", "c", "d", "e"];
const numbers = [1, 2, 3, 4, 5];

// const a = alphabet[0];
// const b = alphabet[1];

const [a,b] = alphabet;

// const c = alphabet[2];

const [,,c] = alphabet;

const [,,, ...rest] = alphabet;

console.log(`a: ${a} b: ${b} c: ${c} rest: ${rest}`);

function sumAndMultiply(x,y) {
  return [x+y, x*y]
};

const [sum, multiply, division = "noDivision"] = sumAndMultiply(2,3);

console.log(sum,multiply,division);

const person1 = {
  name:"Tikka",
  age:21,
  address: {
    city: "Wroclaw",
  }
};

// const { name: firstName, age, favouriteFood = "Mantı" } = person1         
/* it takes name and age from person1, saves name to firstName variable - saves age to age. favouriteFood has default value: "Mantı"  */  

/* const { name: firstName, ...restOf } = person1
console.log(restOf); */

/* const { name: firstName, address: {city} } = person1
console.log(city); */

const person2 = {
  age:33,
  address: {
    street: "Prosta"
  }
};

const person3 = {...person1, ...person2};  // it merges person1 and person2 if two has same props, uses second one
console.log(person3);

const printUser = ({name, age, favouriteFood = "Mantı"}) => {                                 // using destructuring in functions, it gives favouriteFood to default
  console.log(`first name is: ${name}, age is: ${age}, food is: ${favouriteFood}`);
};

printUser(person3);