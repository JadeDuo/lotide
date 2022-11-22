const assert = require('chai').assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns {t:2,e:1,s:1} when given 'test' ", () => {
    assert.deepEqual(countLetters("test"), {t:2,e:1,s:1});
  });
});