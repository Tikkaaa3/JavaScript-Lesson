const cat = {
  name: "Leia",
  speak (sound) {
    return `${this.name} says ${sound}`
  }
};

console.log(cat.speak("Meow"));     // Leia says Meow

const catSpeak = cat.speak;
console.log(catSpeak("Meow"));      // undefined says Meow => because we have lost the connection to cat object

const catSpeak1 = cat.speak.bind(cat);
console.log(catSpeak1("Meow"));      // Leia says Meow

const catSpeak2 = cat.speak.bind({name: "Rey"});
console.log(catSpeak2("Meow"));      // Rey says Meow

const catSpeak3 = cat.speak.bind({name: "Rey"}, "Hrr");
console.log(catSpeak3("Meow"));      // Rey says Hrr

// call

const catSpeak4 = cat.speak
console.log(catSpeak4.call());      // undefined says undefined
console.log(catSpeak4.call(cat, "Meow"));     // Leia says Meow

// apply => similiar to call func but expects the argument in an array format

const catSpeak5 = cat.speak;

const test = (...args) => {
  return catSpeak5.apply(cat, args)
};
console.log(test("Meow"));                // Leia says Meow
