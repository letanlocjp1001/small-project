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
}
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
/*
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
