const without = function(sourceArr, toRemoveArr) {
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    let allowedValIndex = toRemoveArr.indexOf(sourceArr[i]);
    if (allowedValIndex === -1) {
      newArr.push(sourceArr[i]);
    }
  }
  return newArr;
};

module.exports = without;
