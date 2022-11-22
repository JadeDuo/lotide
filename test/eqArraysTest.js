const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true if identical", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  ///
  it("returns false if not identical", () => {
    assert.isFalse(eqArrays(["1", 2], [1, "2"]));
  });
});