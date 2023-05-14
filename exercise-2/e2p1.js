/*
1.	A curtain company charges customers for materials and labor, 
The labor cost is $6.50 per metre to make up a set of curtains and $45 to install them. 
The materials cost depends on how expensive the customers fabric is, and how big their curtains are. 

Write a program which will store:
•	the cost of the material per metre
•	the number of metres the user requires required

and will output:
•	the total cost of the cloth used for the curtains
•	the cost of making the cloth into curtains
•	the total cost of the curtains, including installation
the output should have descriptive text to explain the amount shown.
*/
import { question } from 'readline-sync'

const costPerM = parseInt(question('How much is the fabric per square meter?\n'))
const metersNeeded = parseInt(question('How many meters do you need?\n'))

const costOfColth = costPerM * metersNeeded
const costOfProduction = 6.50 * metersNeeded
const totalCost = costOfColth + costOfProduction + 45

console.log('The total cost of the cloth is: ', costOfColth)
console.log('The total cost of labor is: ', costOfProduction)
console.log('The total cost is: ', totalCost)
