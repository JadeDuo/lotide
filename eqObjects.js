const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};
/////////

const eqObjects = function(obj1, obj2) {
  ///if length isn't the same, return false
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  for (let key in obj1){
     /////if the value of the key is an array, call function and compare with 
    if(Array.isArray(obj1[key])) {
      if (eqArrays(obj1[key], obj2[key]) === false) {
        return false;
      }
    } else {
      if(obj1[key] !== obj2[key]) {
      return false;
      }
    }
  }
  return true;
};