const assertObjectsEqual = require("../assertObjectsEquals");

let a1 = { a: 1, b: 2 };
let a2 = { a: 1, b: 2 };

assertObjectsEqual(a1, a2);