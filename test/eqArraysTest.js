const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
assertEqual(eqArrays(arr, arr2), true);