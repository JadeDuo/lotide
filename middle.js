const middle = function(arr) {
  let midIndex = ((arr.length - 1) / 2);
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 !== 0) {
    return arr.slice(midIndex, midIndex + 1);
  }
  if (arr.length % 2 === 0) {
    return arr.slice(midIndex, midIndex + 2);
  }
};

module.exports = middle;