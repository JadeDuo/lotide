# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @JadeDuo/lotide`

**Require it:**

`const _ = require('@JadeDuo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the first element of the array, as an array.
* `tail(arr)`: returns all except the first element of the array, as an array.
* `middle(arr)`: returns the middle element of the array. returns single element in an array if array length is odd, otherwise returns the two middle elements in an array if length is even.
* `without(sourceArr, toRemoveArr)`: returns a copy of source array without elements from removal array .
* `takeUntil(arr, callback)`: returns a copy of source array starting from 0 index until the callback function evaluates to false.
* `map(array, callback)`: returns a copy of source array with each element modified by the callback function. 
* `letterPositions(sentence)`: returns an object where the keys are the characters within the source string, and their values are the index position.
* `findKeyByValue(obj, val)`: returns the key of the source object that matches the value of the 2nd argument.
* `findKey(obj, callback)`: returns the first key of the source object that matches the value when the callback function is true.
* `eqObjects(obj1, obj2)`: returns true if two objects are indentical.
* `eqArrays(arr1, arr2)`: returns true if two arrays are indentical.
* `countOnly(allItems, itemsToCount)`: returns an object where the keys are the elements in the array, and their values are the number of times that element occurs in the source array. This object only contains the keys specified by elements in itemsToCount.
* `countLetters(str)`: returns an object where the keys are the characters in the string and their values are the number of times that character occurs in the source string. this method removes all whitespace characters prior to executing. 
* `assertObjectsEqual(obj1, obj2)`: prints a message to the terminal of if argument objects are identical or not. 
* `assertArraysEqual(arr1, arr2)`: prints a message to the terminal of if the argument arrays are identical or not. only to be used for arrays.
* `assertEqual(actual, expected)`: prints a message to the terminal of if actual and expected are equal or not. only works for primative data types.