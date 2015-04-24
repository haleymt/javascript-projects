function uniq(arr) {
  var newArray = [];
  for (var i=0; i<arr.length; i++) {
    if(newArray.indexOf(arr[i]) === -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// console.log(uniq([1,2,3,2,1]));

function twoSum(arr) {
  var newArray = [];

  for (var i=0; i < arr.length; i++) {
    for (var j= i + 1; j < arr.length; j++) {
        if ((arr[i] + arr[j]) === 0) {
          newArray.push([i, j]);
        }
    }
  }

  return newArray;
}

// console.log(twoSum([-1, 0, 2, -2, 1]));

function myTranspose(arr) {
  var newArray = [];
  for (var i = 0; i <arr.length; i++) {
    var rowArray = [];
    for (var j = 0; j < arr[i].length; j++) {
      rowArray.push(arr[j][i]);
    }
    newArray.push(rowArray);
  }
  return newArray;
}

// console.log(myTranspose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));

Array.prototype.myEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};


// arr.myEach(function(el) {
//   console.log(el * 2);
// });

Array.prototype.myMap = function(cb) {
  var newArray = [];

  this.myEach(function(el) {
    newArray.push(cb(el));
  });

  return newArray;
};


// var arr2 = arr.myMap(function(el) {
//   return el * 2;
// });

// console.log(arr2);

Array.prototype.myInject = function(cb) {
  var accum = this[0];
  var newArray = this.slice(1,this.length);
  newArray.myEach(function(el) {
    accum = cb(accum, el);
  });
  return accum;
};

var arr = [1,2,3];

var result = arr.myInject(function(x, y) {
  return x + y;
});

// console.log(result);


function bubbleSort(arr) {
  var sorted = false;

  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var currentEl = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = currentEl;
        sorted = false;
      }
    }
  }

  return arr;
}

// console.log(bubbleSort([3,2,5,6,1,4]));

function subStrings(str) {
  var subs = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i; j < str.length; j++) {
      if(subs.indexOf(str.substring(i,(j+1))) === -1) {
        subs.push(str.substring(i,(j+1)));
      }
    }
  }
  return subs;
}

// console.log(subStrings("dodo"));

function range(num1,num2) {
  if (num2 < num1) {
    return [];
  }

  var nums = [];
  for (var i = num1; i <= num2; i++) {
    nums.push(i);
  }

  return nums;
}

// console.log(range(5,2));

function rangeRec(num1, num2) {
  if (num2 < num1) {
    return [];
  } else if (num1 === num2) {
    return [num1];
  }
  return [num1].concat(rangeRec((num1 + 1), num2));
}

// console.log(rangeRec(2,7));

function exponent(base, num) {
  if(num === 0) {
    return 1;
  }
  return base * exponent(base, num-1);
}

function exponent2(base, num) {
  if(num === 0) {
    return 1;
  } else if(num === 1) {
    return base;
  } else if(num % 2 === 0) {
    return exponent2(base, num/2) * exponent2(base, num/2);
  } else {
    return base * (exponent2(base, (num -1)/2) * exponent2(base, (num -1)/2));
  }
}

// console.log(exponent2(2,4));
function fibsIter(n) {
  var result = [0, 1];
  if(n === 0) {
    result = [];
  } else if(n === 1) {
    result = [0];
  } else if(n > 2) {
    for (var i = 2; i < n; i++) {
      result.push(result[i-2] + result[i-1]);
    }
  }

  return result;
}

// console.log(fibsIter(0));

function fibsRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else if (n > 2) {
    var prevFibs = fibsRec(n-1);
    var newFib = prevFibs[prevFibs.length -1] + prevFibs[prevFibs.length-2];
    return prevFibs.concat([newFib]);
  }
}

// console.log(fibsRec(6));

function binarySearch(array, target) {
  if (array === []) {
    return null;
  } else if(array.length === 1) {
    return (array[0] === target) ? 0 : null;
  }

  var left = array.slice(0, array.length / 2);
  var right = array.slice((array.length / 2) + 1, array.length);
  var midIndex = parseInt(array.length / 2);

  if (target === array[midIndex]) {
    return midIndex;
  } else if (target > array[midIndex]) {
    var loc = binarySearch(right, target);
    return (loc === null) ? null : (loc + midIndex + 1);
  } else {
    return binarySearch(left, target);
  }
}

// console.log(binarySearch([1, 2, 3], 1)); // => 0
// console.log(binarySearch([2, 3, 4, 5], 3)); // => 1
// console.log(binarySearch([2, 4, 6, 8, 10], 6)); // => 2
// console.log(binarySearch([1, 3, 4, 5, 9], 5)); // => 3
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // => 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // => nil
// console.log(binarySearch([1, 2, 3, 4, 5, 7], 6)); // => nil

function makeChange(num, coins) {
  if (num === 0) {
    return [];
  } else if (num < coins[0]) {
    return makeChange(num, coins.slice(1,coins.length));
  }

  var coin = coins[0];
  var newNum = num - coin;

  if (newNum < coin) {
    return [coin].concat(makeChange(newNum, coins.slice(1,coins.length)));
  } else {
    return [coin].concat(makeChange(newNum, coins));
  }
}

function makeBetterChange(num, coins) {
  if (num === 0) {
    return [];
  }
  var best = [];

  for (var i = 0; i < coins.length; i++) {
    if (coins[i] > num) continue;
    var result = [coins[i]].concat(makeBetterChange(num - coins[i], coins));
    if (best.length === 0) {
      best = result;
    } else if (result.length < best.length) {
      best = result;
    }
  }
  return best;
}

// console.log(makeChange(14, [10, 7, 1]));
// console.log(makeBetterChange(100, [10, 7, 1]));
function merge(arr1, arr2) {
  var newArray = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      newArray.push(arr1.shift());
    } else {
      newArray.push(arr2.shift());
    }
  }
  return newArray.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var left = arr.slice(0, (arr.length/2));
  var right = arr.slice((arr.length/2), arr.length);
  return merge(left, right);
}

// console.log(mergeSort([1,7,9,3,4,6]));

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  var newArray = [];
  for (var i = 0; i < arr.length; i ++) {
    var subArray = subsets(arr.slice(0, i));
    for (var j = 0; j < subArray.length; j++) {
      newArray.push(subArray[j].concat([arr[i]]));
    }
    // console.log(newArray);
    newArray = subArray.concat(newArray);
  }
  return newArray;
}

console.log(subsets([1,2,3]));
