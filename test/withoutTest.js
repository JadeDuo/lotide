const assert = require('chai').assert;
const without = require("../without");

describe("#without", () => {
  it("returns [1] given ([1, 2], [2])", () => {
    assert.deepEqual(without([1, 2], [2]) [1]);
  });
});