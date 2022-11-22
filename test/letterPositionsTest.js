const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns {t:[0, 3],e:1,s:2} when given 'test'", () => {
    assert.deepEqual(letterPositions("test"), {t:[0, 3],e:1,s:2});
  });
});