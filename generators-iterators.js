function* myGenerator() {               // * after function statement says this function gonna be generator name is not necessary
  // this code will be runned with yield one 
  yield 1
  // this code will be runned with yield two
  yield 2
  // this code will be runned with yield three
  yield 3
  // this code will be runned with the last next() function
}

const generatorObject = myGenerator();  // myGenerator function will generate an object and we save it as generator object

console.log(generatorObject.next());    // {value: 1,done: false}      next() function runs the next yield 
console.log(generatorObject.next());    // {value: 2,done: false}
console.log(generatorObject.next());    // {value: 3,done: false}
console.log(generatorObject.next());    // {value: undefined,done: true}


function* generateId() {                // this function generates us id's, it will increase the id number with every next() func
  let id = 0;
  while (true) {
    yield id
    id++
  }
};

const idGeneratorObject = generateId();


while (idGeneratorObject.next().done !== false) {
  console.log("iterator");
  idGeneratorObject.next();
}


function* iterator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i]
  }
};

const generatorObject2 = iterator([1,2,3,4,5]);
console.log(generatorObject2.next());
console.log(generatorObject2.next());
console.log(generatorObject2.next());
console.log(generatorObject2.next());
console.log(generatorObject2.return());             // return ends the generator, it doesn't matter wherever it is
console.log(generatorObject2.next());               
