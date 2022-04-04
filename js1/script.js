'use strict'

/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!!!!'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 20

document.querySelector('.guess').value = 23
console.log((document.querySelector('.guess').value = 23))
*/

// const x =()=>{
//   console.log(document.querySelector(".guess").value)
// }

const number = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = number

let score = 20

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value
  console.log(guess, typeof guess)

  if (!guess) {
    document.querySelector('.message').textContent = '😠　No Number!'
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🥲 Correct Number'
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😏 Too high!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '😏 You lost the game!!'
      document.querySelector('.score').textContent = 0
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😏 Too low'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '😏 You lost the game!!'
      document.querySelector('.score').textContent = 0
    }
  }
})
