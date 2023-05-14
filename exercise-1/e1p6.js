/*
6.	Write a program which will ask for three numbers, save them in three different variables and will then print out the three numbers, the total and the average in the following format:

The numbers were ___, ____ and _____
The total of these numbers is ___________
The average of these numbers is _____________
*/
import { question } from 'readline-sync'

let num1 = parseInt(question('What is number 1\n'))
let num2 = parseInt(question('What is number 2\n'))
let num3 = parseInt(question('What is number 3\n'))

let total = num1 + num2 + num3
console.log(`The numbers were ${num1}, ${num2}, ${num3}`)
console.log(`The total of these numbers is ${total}`)
console.log(`The average of these numbers is ${total / 3}`)
