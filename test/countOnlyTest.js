const assert = require('chai').assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("returns object containing '1': 1 when given ([1, 2, 3], {1: true, 2: false }) ", () => {
    assert.deepEqual(countOnly([1, 2, 3], {1: true, 2: false }), {"1": 1});
  });
});