'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

let score = 20

const secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number (document.querySelector('.guess').value)
    console.log('guess: ', typeof guess)
    
    if(!guess){
        document.querySelector('.message')
        .textContent = 'No Number! 😰'
    } else if (guess === secretNumber) {
        document.querySelector('.message')
        .textContent = 'Congrats! 👏'
    } else if (guess > secretNumber) {
        if (score > 1){
            document.querySelector('.message')
            .textContent = 'Number is too high'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You Lost!'
            document.querySelector('.score').textContent = 0
        }
    } else if (guess < secretNumber) {
        if (score > 1){
            document.querySelector('.message')
            .textContent = 'Number is too low'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You Lost!'
            document.querySelector('.score').textContent = 0
        }
    }
})
