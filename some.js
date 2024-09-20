// some
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

let numberArrSome = numberArr.mySome((value) => value % 2 === 1);
console.log(numberArrSome);
