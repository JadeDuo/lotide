const letterPositions = function(sentence) {
  let results = {};
  //stores the characters as keys and the index as value
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  for (let key in results) {
    if (results[key].length === 1) {
      results[key] = parseInt(results[key].join());
    }
  }
  return results;
};

module.exports = letterPositions;


