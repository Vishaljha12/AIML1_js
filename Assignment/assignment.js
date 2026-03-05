//largest of three num using ternary operator
let a = 30, b = 10, c = 22;

let largest = (a > b && a > c) ? "a" : (b > c) ? "b" : "c";

document.write(largest + " is the largest");