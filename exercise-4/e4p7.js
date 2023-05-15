/*
7.	Write a program to calculate factorials. 
6 factorial (written as 6!) is calculated as 6 x 5 x 4 x 3 x 2 x 1

*/

import {questionInt} from "readline-sync"

let total = 0

let end = questionInt("Pick a number")

for (let i=1; i<end; i++){
    total += i
}
