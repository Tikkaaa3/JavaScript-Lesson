function outerFunction (outerVaribale) {
  return function innerFunction (innerVariable) {
    console.log("Outer Variable: " + outerVaribale);
    console.log("Inner Variable: " + innerVariable);
  }
}

const newFunction = outerFunction("outside")           // Outer Variable: outside     
newFunction("inner");                                 // Inner Variable: inner  
                                             