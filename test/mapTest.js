const assert = require('chai').assert;
const map = require("../map");

describe("#map", () => {
  it("returns [2, 3, 4] when given [1, 2, 3], (x) => x + 1", () => {
    assert.deepEqual(map([1, 2, 3], (x) => x + 1), [2, 3, 4]);
  });
});