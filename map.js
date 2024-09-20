// My map
let numberArr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

let newArrNumber = numberArr.myMap((value, idx, arr) => value * 2);
console.log(newArrNumber);