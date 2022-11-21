const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail")

let arr = [1, 2, 3, 4];
assertArraysEqual(tail(arr), [2, 3, 4]);
