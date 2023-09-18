const array = [1, 2, 3]

/* const addElementToArray = (e) => {                         Not Pure Function, it shouldn't change any global var and when 
  array.push(e);                                              its called with same argument, it has to return the same value
} */

const pureFunction = (e,array) => {
  return [...array,e]
}

console.log(pureFunction(4,array));                   // it only gives you a value but doesnt change any global var   [1, 2, 3, 4]
console.log(array);                                   // this will give you [1, 2, 3]