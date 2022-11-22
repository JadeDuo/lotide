const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

describe("#takeUntilTest", () => {
  it("returns [1, 2] when given [1, 2, 3, 4], (x) => x > 2", () => {
    assert.deepEqual(takeUntil([1, 2, 3, 4], (x) => x > 2) [1, 2]);
  });
});