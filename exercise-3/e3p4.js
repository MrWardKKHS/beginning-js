/*
4.	The gas company charges 7.45 cents per unit for the first 55 units of gas 
and 6.85 cents per unit for each extra unit of gas used. 
Write a program that will calculate a customer’s monthly account when the number of units of gas used is entered. 
The account should be in dollars
*/

import { questionInt } from "readline-sync";

const units = questionInt("How many units did you use")
const unitPrice = 0.0745
const unitPriceAbove55 = 0.0685
let total 

if (units <= 55){
    total = units * unitPrice
} else {
    total = unitPrice * 55 + unitPriceAbove55 * (units - 55)
}

console.log(`Total due: $${total.toFixed(2)}`)
