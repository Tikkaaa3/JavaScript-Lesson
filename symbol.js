let symbol1 = Symbol("Symbol");       // symbols are unique and immutable
let symbol2 = Symbol("Symbol");       // symbol1 and symbol2 is not equal even though string inside them are the same(this string helps identify symbol)

// use case 1: Symbols as property keys
const MY_KEY = Symbol();
let obj = {};
obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);             // 123 has unique key in obj 