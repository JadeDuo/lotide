const takeUntil = function(array, callback) {
  const newArr = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};

module.exports = takeUntil;