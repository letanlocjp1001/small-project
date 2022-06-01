'use strict'

/*
const bookings = []
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1
  // price = price || 199
  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking)
  bookings.push(booking)
}
createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 2)
createBooking('LH123', 5)

createBooking('LH123', undefined, 100)


const flight = 'LH234'
const jonas = {
  name: 'Kaneki Ken',
  passport: 23456788887,
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'
  passenger.name = 'Mr. ' + passenger.name
  if (passenger.passport === 23456788887) {
    alert('Check in')
  } else {
    alert('Check out Wrong passport')
  }
}

checkIn(flight, jonas)
console.log(flight)
console.log(jonas)

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000)
}
newPassport(jonas)
checkIn(flight, jonas)


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase()
}
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ')
  return [first.toUpperCase(), ...others].join(' ')
}

//Higher-order function
const transformer = function (str, fn) {
  console.log(`original string : ${str}`)
  console.log(`Transformed string ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`)
}
transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)

const high5 = function () {
  console.log('😃')
}
document.body.addEventListener('click', high5)


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Kaneki')
greet('Hello')('KANEKI')

//Challenge = Challenge ||
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`)
greetArr('LLO')('KKK')


const lufthanse = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:function(){}
  book(flightNm, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNm}`
    )
    this.bookings.push({ flight: `${this.iataCode}${flightNm}`, name })
  },
}

lufthanse.book(239, 'Kaneki Ken')
lufthanse.book(635, 'John Smith')
console.log(lufthanse)

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthanse.book

//Does NOT work
// book(23, "Sarah Williams")
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings)

book.call(lufthanse, 239, 'Merry')
console.log(lufthanse)

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
}
book.call(swiss, 583, 'Tracy')
console.log(swiss)

//Apply Methods
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

book.call(swiss, ...flightData)

//Bind method
// book.call(eurowings, 23, 'Sarah Williams')
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthanse)
const bookLX = book.bind(swiss)
bookEW(23, 'Steven Williams')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Neymar')

//With Event Listeners
lufthanse.planes = 300
lufthanse.buyPlane = function () {
  console.log(this)
  this.planes++
  console.log(this.planes)
}
document
  .querySelector('.buy')
  .addEventListener('click', lufthanse.buyPlane.bind(lufthanse))

//Partial application
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)
//addVAT = value => value + value*0.23

console.log(addVAT(100))
console.log(addVAT(23))
*/
