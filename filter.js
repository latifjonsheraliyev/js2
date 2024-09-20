// myFilter
Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

let newNumberArr = numberArr.myFilter((item) => item % 2 === 0);
console.log(newNumberArr);
