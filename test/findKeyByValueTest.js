const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("returns 'b' when given {a:1, b:2}, 2", () => {
    assert.strictEqual(findKeyByValue({a:1, b:2}, 2), "b");
  });
});