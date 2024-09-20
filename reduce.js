// My Reduce
Array.prototype.myReduce = function (cb) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    count += this[i];
  }
  return count;
};

let reuduce = numberArr.myReduce((value) => value);
console.log(reuduce);
