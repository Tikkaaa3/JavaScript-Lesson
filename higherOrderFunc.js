// higher order function is a function which takes a function as a parameter or returns a function

// examples of func which takes func as params:  setTimeout(), array.filter().map()

[0, -1, 2, 17, -7].filter((value, index) => {                         // they take functions as params    
  return value >= 0;
});


[0, -1, 2, 17, -7].map((value, index) => {                               
  return value * 2;
});

// examples of func which returns func: Function Factory


<button onclick="onClick12" > 12px </button>;
<button onclick="onClick14" > 14px </button>;
<button onclick="onClick16" > 16px </button>;

const onClick12 = makeClickHandler(12);
const onClick14 = makeClickHandler(14);
const onClick16 = makeClickHandler(16);

function makeClickHandler(size) {
  return function() {
    document.body.style.fontSize = `${size}px`
  }
}