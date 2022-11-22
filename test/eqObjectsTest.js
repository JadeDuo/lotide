const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true if identical", () => {
    assert.isTrue(eqObjects({1: 1, 2: 2}, {1: 1, 2: 2}));
  });
  ///
  it("returns false if not identical", () => {
    assert.isFalse(eqObjects({1: 1, 2: 2}, {1: 1, 2: 3}));
  });
});