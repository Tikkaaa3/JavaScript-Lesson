const myArray = [0,1,"hello",{name:"tikka",isFine:true},3];
myArray.push(13);
myArray.splice(0,2); 
console.log(myArray);

const array1 = [1, 2, 3];
const array2 = array1;
const array3 = array1.slice();

console.log(`\narray1: ${array1}\narray2: ${array2}\narray3: ${array3}`);


const [firstValue, secondValue, thirdValue] = [1, 2, 3];
console.log(firstValue,secondValue,thirdValue);


["hello", "tikka", "yuppi"].forEach(function (value, index) {
  if (value === "hello") {
    return;                                 // same as continue on for loops
  }
  console.log(value,index);
})




let i=0;

while (i<=5) {
  console.log(`number: ${i}`);
  i++;
}


for (let i =0; i<=5; i++){
  console.log(`number: ${i}`);
}

for (let i=0; i <= 10; i++) {
  if (i === 3){
    continue;             // skip 3 and continue
  }
  console.log(i);
  if (i === 8) {
    break;                // end loop
  }
}

setTimeout(function() {console.log("Helloo after 3 sec!");}, 3000); // runs function after 3000 milliseconds => this is asynchronous code 
console.log("next line");

setInterval(function() {console.log("Helloo every 3 sec!");}, 3000); // runs code every 3 milliseconds => this is also asynchronous code