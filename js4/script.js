'use strict'

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear
  // console.log(firstName)

  function printAge() {
    let outPut = `${firstName}, you are ${age}, born is ${birthYear}`
    console.log(outPut)

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true
      const firstName = 'Steven'
      const str = `Oh, you are a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }

      const outPut = 'NEW OUTPUT'
      console.log(outPut)
    }
    // console.log(str)
    console.log(millenial)
    // console.log(add(2, 3))
    console.log(outPut)
  }
  printAge()

  return age
}

const firstName = 'Jonas'
calcAge(1991)


//Variables
console.log(me)
// console.log(year)
// console.log(job)

var me = 'Jonas'
let job = 'teacher'
const year = 1991

//Functions
console.log(addDecl(2, 3))
// console.log(addExpr(2, 3))
// console.log(addArrow(2, 3))

function addDecl(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

const addArrow = (a, b) => a + b

// Examples
if (!numProducts) deleteShoppingCart()

var numProducts = 10
function deleteShoppingCart() {
  console.log('All products deleted')
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)


// console.log(this)

const calcAge = function (birthYear) {
  console.log(2047 - birthYear)
  console.log(this)
}
calcAge(1991)

const calcAgeArrow = (birthYear) => {
  console.log(2047 - birthYear)
  // console.log(this)
}
calcAgeArrow(2000)

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
  },
}
jonas.calcAge()

const matilda = { year: 2017 }
matilda.calcAge = jonas.calcAge
matilda.calcAge()

var firstName = 'KAneki'

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)

    //Solution 1
    // const self = this
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // }

    //Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996)
    }

    isMillenial()
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`)
    console.log(this)
  },
}
jonas.greet()
jonas.calcAge()

const addExper = function (a, b) {
  console.log(arguments)
  return a + b
}
addExper(3, 6)

const addArrow = (a, b) => a + b


let age = 30
let oldAge = age
age = 31

console.log(age)
console.log(oldAge)

const me = {
  name: 'Jonas',
  age: 30,
}
const friend = me

friend.age = 27

console.log(me)
console.log(friend)
*/

let lastName = 'Williams'
let oldlastName = lastName
lastName = 'Davis'
console.log(lastName, oldlastName)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}
const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
// console.log('Before marriage:', jessica)
// console.log('After marriage:', marriedJessica)

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice, BEM'],
}
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'DAvis'

jessicaCopy.family.push('TRacy')
jessicaCopy.family.push('Jone')

console.log('Before marriage:', jessica2)
console.log('After marriage:', jessicaCopy)
