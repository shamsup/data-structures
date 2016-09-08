var Queue = function() {
  this.count = 0;
  this.minKey = 0;
  this.maxKey = 0;
  this.storage = {};
};

Queue.prototype.size  = function() {
  return this.count;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.maxKey] = value;
  this.maxKey += 1;
  this.count += 1;
  return this.count;
};

Queue.prototype.dequeue = function() {
  if (this.count === 0) {
    return;
  }

  var result = this.storage[this.minKey];
  delete this.storage[this.minKey];
  this.count -= 1;
  this.minKey += 1;
  return result;
};
