const countLetters = function(str) {
  let results = {};
  for (let letter of str.replace(/\s/g, '')) {
    results[letter] = results[letter] ? results[letter] + 1 : 1;
  }
  return results;
};
