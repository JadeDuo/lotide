const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🚩Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;