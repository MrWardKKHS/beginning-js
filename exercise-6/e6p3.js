/*
3	The Fibonacci series is a series of numbers where each successive term 
is found by adding the two terms before it. The series starts 1, 1, 2, 3, 5, 8 etc.
Write a program that will ask the user how many terms they wish to see,
and then outputs the series for that many terms.
*/

import {questionInt} from "readline-sync";

let n_terms = questionInt("How many terms do you want to see?\n")
let a = 1
let b = 1
for (let i=0; i<n_terms; i++){
    console.log(a)
    let temp = a
    a = b
    b = temp + b
}

    
