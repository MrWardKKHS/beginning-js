/*
3.	Write a program which will allow the user to input a first number, last number and step size, 
and then print out all of the numbers from first to last with the proper step size.
*/

import { questionInt } from 'readline-sync'

const first = questionInt('What number should we start at?\n')
const last = questionInt('What number should we stop at?\n')
const step = questionInt('What should our step size be?\n')

for (let i=start; i<stop; i+=step){
    console.log(i)
}
