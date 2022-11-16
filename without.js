const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
};
//////////////
const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🚩Assertion Failed: ${arr1} !== ${arr2}`);
};
////////////////
const without = function(sourceArr, toRemoveArr) {
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    let allowedValIndex = toRemoveArr.indexOf(sourceArr[i]);
    if (allowedValIndex === -1) {
      newArr.push(sourceArr[i]);
    }
  }
  return newArr;
};


