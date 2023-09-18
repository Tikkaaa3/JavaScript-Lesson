const buildSanwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`
    }
  }
}

const mySandwich = buildSanwich("lettuce")("tomato")("bacon")
console.log(mySandwich);

const buildSammy = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`

const mySammy = buildSammy("turkey")("cheese")("bread")
console.log(mySammy);

const multiply = (x,y) => {
  return x * y
}

const curriedMultiply = x => y => x * y;

const timesTen = curriedMultiply(10);       // x * y => x = 10
console.log(timesTen(8));                  // 10 * y(8 in this case) = 80

// ****************************************************************************

const addCustomer = fn => (...args) => {
  console.log("saving customer info...");
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing #${args[0]}`);
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`order ${args[0]} completed`);
}

completeOrder = processOrder(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder("1000");

// *****************************************************************************


const curry = (fn) => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  }
}