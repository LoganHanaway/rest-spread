function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
  }
  
function findMin(...nums){
    return Math.min(...nums);
}

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1


function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}


function doubleAndReturnArgs(arr, ...args){
    const doubledArgs = args.map(value => value * 2)
    return [...arr, ...doubledArgs]
}


// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  var newArray = items.slice();
  if (newArray.length <= 1) {
    return [];
  }
  var randomIndex = Math.floor(Math.random() * newArray.length);
  newArray.splice(randomIndex, 1);
  return newArray;
}

const removeRandom2 = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  };

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2]
}

const extend2 = (array1, array2) => {
    return [...array1, ...array2]
}
/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

const addKeyVal2 = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = { ...obj };
    if (key in newObj) {
        delete newObj[key];
    }
    return newObj;
}

const removeKey2 = (obj, key) => {
    const newObj = { ...obj };
    if (key in newObj) {
      delete newObj[key];
    }
    return newObj;
  };
  

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}

const combine2 = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

const update2 = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}