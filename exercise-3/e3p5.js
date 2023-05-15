/*
5.	Write a program that asks for the length of three sides of a triangle and if it is a valid triangle  
(2 sides cannot add up must be more than the third side), calculates the perimeter of the triangle. 
Otherwise it prints out an error message.
*/

import { questionFloat } from 'readline-sync'

const a = questionFloat("input side a\n")
const b = questionFloat("input side b\n")
const c = questionFloat("input side c\n")

if (a + b <= c || a + c <= b || c + b <= a){
    throw Error('Invalid triangle')
} else {
    console.log('The perimeter is', a + b + c)
}
