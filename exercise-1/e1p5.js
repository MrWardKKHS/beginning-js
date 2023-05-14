/*
5.	Write a program that will ask the user’s age and then outputs a statement saying

Your current age is _________
In the year 2050 you will be ______ years old
*/

import { question } from 'readline-sync'

let num = question('What is your age?\n')

console.log('your current age is ', num, '\n')
let years = parseInt(num) + 27
console.log(`In the year 2050 you will be ${years} years old`)

