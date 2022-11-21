const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

let arr = [1, 2, 3, 4];
assertArraysEqual(middle(arr), [2, 3]);