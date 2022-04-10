'use strict'
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[2]]: {
    open: 11,
    close: 23,
  },
  [weekdays[4]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}
// console.log(openHours)
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openHours,

  order(starterMenu, mainIndex) {
    return [this.starterMenu[starterMenu], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be delivered to ${address} at ${time}`
    )
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient)
    console.log(otherIngredient)
  },
}

const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log(plane[3])

console.log('B737'[0])

console.log(airline.length)
console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('portugal'))

console.log(airline.slice(4))
console.log(airline.slice(4, 7))
/*

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
])
console.log(question)

// Covert object to map
// console.log(Object.entries(openHours))
const hoursMap = new Map(Object.entries(openHours))
// console.log(hoursMap)

//Quiz app
console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`)
  }
}

// const answer = Number(prompt('Your answer'))
const answer = 3
console.log(answer)
console.log(question.get(question.get('correct') === answer))

//Convert map to arrays
console.log(...question)
console.log(...question.entries())
console.log(...question.keys())
console.log(...question.values())

const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 21
console.log(rest.get(time > rest.get('open') && rest.get('close') > time))

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest)

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
])
console.log(ordersSet)
console.log(new Set('LETANLOC'))
console.log(ordersSet.size)
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('Bread'))

ordersSet.add('Garlic Breac')
ordersSet.delete('Risotto')
// ordersSet.clear()
console.log(ordersSet)

for (const order of ordersSet) {
  console.log(order)
}
Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique1 = new Set(staff)
const staffUnique2 = [...new Set(staff)]
console.log(staffUnique1)
console.log(staffUnique2)

//Property NAMES
const properties = Object.keys(openHours)
console.log(properties)

let openStr = `We are open on ${properties.length} day: `

for (const day of properties) {
  openStr += `${day},`
}
console.log(openStr)

// Property VALUES
const values = Object.values(openHours)
console.log(values)

//Entries Object
const entries = Object.entries(openHours)
console.log(entries)

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}

////////////////////////////////////////////////////////////////
if (restaurant.openHours && restaurant.openHours.mon)
  console.log(restaurant.openHours.mon.open)

console.log(restaurant.openHours.mon?.open)
console.log(restaurant.openHours?.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days) {
  const open = restaurant.openHours[day]?.open ?? 'close'
  console.log(`On ${day}, we open at ${open}`)
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'MEthod does not exist')
console.log(restaurant.orderKaneki?.(0, 1) ?? 'MEthod does not exist')

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }]

console.log(users[0]?.name ?? 'User array emty')

// console.log(restaurant)

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu)

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i])
// }
for (const item of menu) console.log(item)

for (const [index, el] of menu.entries()) {
  console.log(`${index + 1}: ${el}`)
}


const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
}
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10
rest2.numGuests ??= 10

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1)
console.log(rest2)

restaurant.numGuests = 0

const guests = restaurant.numGuests || 10
console.log(guests)

//Nulish: null and undefined( NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)


console.log('---OR---')
//Use  ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas')
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)
console.log(0 || 1)
console.log(undefined || 0 || '' || 'Hello' || 23 || null)

restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1) //Tai numGuests khong ton tai => undefined nen no lay so 10

const guests2 = restaurant.numGuests || 10
console.log(guests2)

console.log('---AND---')

console.log(0 && 'JONAS')
console.log(7 && 'JONAS')

console.log('Hello' && 23 && undefined && 'jonas')


// //SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]]
// // console.log(arr)

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]
// console.log(pizza, risotto, otherFood)

// //objects
// const { sat, ...weekdays } = restaurant.openingHours
// // console.log(restaurant.openingHours)
// console.log(sat)
// console.log(weekdays)

//2 Functions
const add = function (...number) {
  let sum = 0
  for (let i = 0; i < number.length; i++) {
    sum += number[i]
    console.log(sum)
  }
}
// add(3, 4)
// add(5, 4, 7, 2)
// add(9, 2, 8, 4, 3, 1, 5)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'oliver', 'spinach')


const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

const newArr = [1, 2, ...arr]
console.log(newArr)

console.log(...newArr)

const newMenu = [...restaurant.mainMenu, 'Monster']
console.log(newMenu)

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas'
const letters = [...str, ' ', 'S.']

console.log(letters)
console.log(...str)

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ]
// console.log(ingredients)

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

//Object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant)

restaurant.orderDelivery({
  time: '22:30',
  address: 'OSAKA',
  mainIndex: 2,
  starterIndex: 1,
})

const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant
console.log(restaurantName, hours, tags)

//Default values
const { menu = [], starterMenu: starter = [] } = restaurant
console.log(menu, starter)

//Mutating variables
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 }
;({ a, b } = obj)
console.log(a, b)

//Nested object

const {
  fri: { open, close },
} = openingHours
console.log(open, close)

const array = [2, 3, 4]
const a = array[0]
const b = array[1]
const c = array[2]

const [x, y, z] = array
console.log(x, y, z)
console.log(array)

// let [main, , secondary] = restaurant.categories
// console.log(main, secondary)

// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)

// [main, secondary] =[secondary, main];
// console.log(main, secondary)

const [starter, main] = restaurant.order(2, 0)
console.log(starter, main)

//Nested destructuring
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
// console.log(i, j)
const [i, g, [j, k]] = nested
console.log(i, g, j, k)

//Default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r)
*/
