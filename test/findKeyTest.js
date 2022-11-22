const assert = require('chai').assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("returns 'b' when given {a:1, b:2, c:3}, (x) => x === 2", () => {
    assert.strictEqual(findKey({a:1, b:2, c:3}, (x) => x === 2), "b");
  });
});