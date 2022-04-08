'use strict'

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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterMenu, mainIndex) {
    return [this.starterMenu[starterMenu], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be delivered to ${address} at ${time}`
    )
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient)
    console.log(otherIngredient)
  },
}
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
/*

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
