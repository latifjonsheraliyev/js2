// My Find
Array.prototype.myFind = function () {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
