var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
  return this.count;
};

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return;
  }

  var result = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count -= 1;
  return result;
};
