const items = [
  {name:"monitor", price:300},
  {name:"mac", price:7000},
  {name:"headphones", price:200},
  {name:"keyboard", price:300},
]

/* totalPrice = 0;
items.forEach((item) => {
  totalPrice += item.price
}); */

const totalPrice = items.reduce((total,item) => {                // reduce function accumulates total for each item passed
  return total + item.price
},0)                                                             // 0 says total variable starts from 0

const people = [
  {name:"Tikka", age:21},
  {name:"ahmet", age:27},
  {name:"mehmet", age:12},
  {name:"hakan", age:1},
]

const result = people.reduce((groupedPeople, person) => {
  const age = person.age
  if (groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
},{})