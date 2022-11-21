// const assertEqual = require("../assertEqual");
// const head = require("../head");

// let arr = [1, 2, 3, 4];
// assertEqual(head(arr), 1);

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  ///
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

