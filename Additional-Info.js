const person = Object.freeze( {             // Object.freeze() makes objects, arrays imSmutable
  name:"Tikka",
  age:"21",
  address: Object.freeze ({
    street: "Prosta"
  }),
  hobbies: Object.freeze(["basketball", "music"])
});

const CURRENCY_MAP = new Map([]);
const usa = { name: "United States" }
CURRENCY_MAP.set(usa,"USD")

const uniqueNumbers = [1,2,3,3,4]
const set = new Set(uniqueNumbers);       // set only takes unique values 

console.time("Timer")
const someFunction = () => {
  console.log("bla bla bla...");            // this Timer will show us the time passed between console.time and console.timeEnd
};
console.timeEnd("Timer")

const someNumber = 2;
console.assert(someNumber === 1, "someNumber is not 1")      // if someNumber !== 1, it will give us Assertion failed "someNumber is not 1" error

const people = [
  {name: "kyle", age: 24},
  {name: "pedro", age: 23},
  {name: "tikka", age: 21}
];

console.table(people);


const someValue = null; // Or it could be undefined
const defaultValue = "This is the default value";

const result = someValue ?? defaultValue;

console.log(result); // Output: "This is the default value"