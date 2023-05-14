/*
4.	Write a program that will ask for a particular number of inches and will convert that number to cm, with an output like

______ inches is equal to _______ cm

(1 inch = 2.54 cm)
*/

import { question } from 'readline-sync'

let num = question('How many inches would you like to convert?\n')

console.log(`${num} inches is equal to ${num * 2.54}cm`)

