/*
6.	Write a program to input a number, then add up all the numbers from 1 to this number. The program should print out a message like:

Adding up all the numbers from 1 to ___ gives ___
*/

import {questionInt} from "readline-sync"

let total = 0

let end = questionInt("Pick a number")

for (let i=0; i<end; i++){
    total += i
}
