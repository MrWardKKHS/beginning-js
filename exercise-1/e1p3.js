/*
3.	Write a program that will ask the user for a number, save it in a variable called num and will then print out the following information using that number, with each statement on a different line.

The number is ___
5 times ____ is _____
if you add 3 to ____ the answer is _____
if you divide 20 by _____ the answer is ______

You may add some other calculations of your own.
*/

import { question } from 'readline-sync'

let num = question('Pick a number\n')
let int = parseInt(num)
console.log(`The number is ${num}`)
console.log(`5 times ${num} is ${int * 5}`)
console.log(`if you add 3 to ${num} the answer is ${int + 3}`)
console.log(`if you divide 20 by ${int} the answer is ${20/int}`)

