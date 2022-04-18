'use strict'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''
  //.textContent = 0
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements //copy một array mới nhờ phương thức slice để không ảnh hưởng đến array gốc

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`

    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

const calcDisplaySummary = function (acc) {
  const summary = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${summary}€`

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}€`
}

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)

  return (labelBalance.textContent = `${acc.balance}€`)
}

const creatUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('')
  })
}

creatUsernames(accounts)

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements)
  //Display balance
  calcPrintBalance(acc)
  //Display summary
  calcDisplaySummary(acc)
}

//Event handler
let currentAccount

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault()
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  )
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`
    containerApp.style.opacity = 100

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    //Update UI
    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  )
  inputTransferAmount.value = inputTransferTo.value = ''

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    //Update UI
    updateUI(currentAccount)
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()

  const amount = Number(inputLoanAmount.value)
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //All movement
    currentAccount.movements.push(amount)
    //Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault()

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    )
    console.log(index)

    //.indexOf(23)

    //Delete account
    accounts.splice(index, 1)
    containerApp.style.opacity = 0
  }
  inputCloseUsername.value = inputClosePin.value = ''
})
let sorted = false
btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted // Rat hay
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ])

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e']
//SLICE
console.log(arr.slice(2))
console.log(arr.slice(2, 4))
console.log(arr.slice(-2))
console.log(arr.slice(1, -2))
console.log(arr.slice())
console.log(...arr)

//SPLICE
// console.log(arr.splice(2))
console.log(arr.splice(-1))
console.log(arr.splice(1, 2))
console.log(arr)

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'j']
console.log(arr2.reverse())
console.log(arr2)

//CONCAT
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

//JOIN
console.log(letters.join(' - '))


const arr = [23, 11, 64]
console.log(arr[0])
console.log(arr.at(2))

//getting last array element
console.log(arr[arr.length - 1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))

console.log('kaneki'.at(0))
console.log('kaneki'.at(1))
console.log('kaneki'.at(2))


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

for (const move of movements) {
  if (move > 0) {
    console.log(`You deposited ${move}`)
  } else {
    console.log(`You withdrew ${Math.abs(move)}`)
  }
}

//forEach
console.log('======FOREACH=======')
movements.forEach(function (move) {
  if (move > 0) {
    console.log(`You deposited ${move}`)
  } else {
    console.log(`You withdrew ${Math.abs(move)}`)
  }
})



//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])
console.log(currencies)

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

//sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`)
})


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUsd = 1.1

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd
})
console.log(movements)
console.log(movementsUSD)
*/

// const deposits = movements.filter(function (mov) {
//   return mov > 0
// })
// console.log(deposits)

//accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Itteration ${i}: ${acc}`)
//   return acc + cur
// }, 0)
// console.log(balance)

//Maximun value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc
//   } else {
//     return mov
//   }
// }, movements[0])

//PIPELINE
// const eurToUSD = 1.1
// const totalDespositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr)
//     return mov
//   })
//   // .map((mov) => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov, 0)
// console.log(totalDespositsUSD)

// const firstWidth = movements.find((mov) => mov < 0)
// console.log(firstWidth)

// const account = accounts.find((acc) => acc.owner === 'Jessica Davis')
// console.log(account)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// console.log(movements)
// //EQUALITY
// console.log(movements.includes(-130))
// //CONDITION
// console.log(movements.some((mov) => mov === -130))
// const anyDeposits = movements.some((mov) => mov > 0)
// console.log(anyDeposits)

//EVERY
// console.log(movements.every((mov) => mov > 0))
// console.log(account4.movements.every((mov) => mov > 0))

// const arr = [[1, 2, 4], [4, 5, 6], 7, 8]
// console.log(arr.flat())

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
// console.log(owners.sort())

// // movements.sort((a, b) => {
// //   if (a > b) return 1
// //   if (b > a) return -1
// // })
// // console.log(movements)
// movements.sort((a, b) => a - b)
// console.log(movements)
// movements.sort((a, b) => b - a)
// console.log(movements)

console.log([1, 2, 3, 4, 5, 6, 7])
console.log(new Array(1, 2, 3, 4, 5, 6, 7))
const x = new Array(7)
console.log(x)
