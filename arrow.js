const arrowFunction = () => {
  // arrow function doesn't have Hoisting feature which means you can not call the function before it is created.
};

const oneLine = () => 1 + 2; // if it is one line arrow function, dont need to use {} or return.

["hello", "tikka", "yuppi"].forEach((value, index) => {
  if (value === "hello") {
    return;
  }
  console.log(value, index);
  console.log("text from main branch");
});

const object1 = {
  method1: () => {},
  method() {
    // this usage is more common.What Is Function
  },
};

console.log(
  [0, -1, 2, 17, -7].filter((value, index) => {
    // filter creates a new array by removing elements that don't belong.
    return value >= 0;
  }),
);

console.log(
  [0, -1, 2, 17, -7].map((value, index) => {
    // map creates a new array by transforming every element in an array individually.
    return value * 2;
  }),
);
